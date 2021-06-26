import { useState, useContext, useEffect } from 'react';

import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import PostCard from '../components/postCard/PostCard';
import wtf from '../assets/img/waterfall.png';
import PP from '../assets/img/ppchat.png';
import PostContext from '../contexts/post/postContext';
import ImageModalContext from '../contexts/imageModal/imageModalContext';
import ImageModal from '../components/imageModal/ImageModal';
import '../styles/imageLayout/image-layout.css';

function Explore() {
   // imageModal Context=========================
   const imageModalContext = useContext(ImageModalContext);
   const { changeImageModal } = imageModalContext;

   // Feed / Post Context========================
   const postContext = useContext(PostContext);
   const { feeds, getFeeds, loading } = postContext;

   useEffect(() => {
      getFeeds();
   }, []);

   // usestate modal
   const [dataModal, setDataModal] = useState({
      name: '',
      caption: '',
      // filename:'',
      // comment:null,
      // like:''
   });
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Explore" />
               <div className="image-layout-container">
                  {/* =============== */}
                  {feeds !== null && !loading ? (
                     !loading ? (
                        feeds.map((feed) => {
                           return (
                              <PostCard
                                 PP={PP}
                                 feed={feed}
                                 dataModal={dataModal}
                              />
                           );
                        })
                     ) : (
                        <h1>Loading..</h1>
                     )
                  ) : (
                     <h1> Follow someone in order to get Feeds on this page</h1>
                  )}
                  {/* =============== */}
               </div>
            </div>
         </div>
         <div>
            <pre style={{ color: 'white', fontSize: '1.5rem' }}>
               {JSON.stringify(feeds, 2, 4)}
            </pre>
         </div>
      </div>
   );
}

export default Explore;
