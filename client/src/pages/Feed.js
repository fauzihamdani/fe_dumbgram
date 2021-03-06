import { useState, useContext, useEffect } from 'react';
import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/imageLayout/image-layout.css';

import PostCard from '../components/postCard/PostCard';
import { Modal } from 'react-bootstrap';

import wtf from '../assets/img/waterfall.png';
import PP from '../assets/img/ppchat.png';
import PostContext from '../contexts/post/postContext';
import ImageModalContext from '../contexts/imageModal/imageModalContext';
import ImageModal from '../components/imageModal/ImageModal';

function Feed() {
   // imageModal Context=========================
   const imageModalContext = useContext(ImageModalContext);
   const { changeImageModal } = imageModalContext;

   // // usestate modal
   // const [dataModal, setDataModal] = useState({
   //    name: '',
   //    caption: '',
   //    // filename:'',
   //    // comment:null,
   //    // like:''
   // });

   // Feed / Post Context========================
   const postContext = useContext(PostContext);
   const { feeds, getFeeds, loading, getFeedsbyFollowed, feedByFollowed } =
      postContext;

   useEffect(() => {
      getFeedsbyFollowed();
   }, []);

   // ============== Modal image Controller====================
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => {
      setShow(true);
   };
   // ==========================================================

   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Feed" />

               <div className="image-layout-container">
                  {/* =============== */}

                  {feedByFollowed !== null && feedByFollowed.length !== 0 ? (
                     !loading ? (
                        feedByFollowed?.map((feed) => {
                           return (
                              <PostCard
                                 PP={PP}
                                 feed={feed}
                                 // dataModal={dataModal}
                              />
                           );
                        })
                     ) : (
                        <h1>Loading..</h1>
                     )
                  ) : (
                     <div>
                        {' '}
                        <h1>
                           <p style={{ fontSize: '1.5rem', color: 'white' }}>
                              {' '}
                              Follow someone in order to get Feeds on this page
                           </p>
                        </h1>
                     </div>
                  )}

                  {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
                  {/* {feeds !== null && !loading ? (
                     !loading ? (
                        feeds?.map((feed) => {
                           return (
                              <PostCard
                                 PP={PP}
                                 feed={feed}
                                 dataModal={dataModal}
                              />
                           );
                        })
                     ) : (
                        <h1>
                           {' '}
                           Follow someone in order to get Feeds on this page
                        </h1>
                     )
                  ) : (
                     <h1>Loading..</h1>
                  )} */}
                  {/* =============== */}
               </div>
            </div>
         </div>
         <div>
            <pre style={{ color: 'white', fontSize: '1.5rem' }}>
               {JSON.stringify(feedByFollowed, 2, 4)}
            </pre>
            {console.log(feedByFollowed)}
         </div>
      </div>
   );
}

export default Feed;
