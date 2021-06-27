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
import { API, setAuthToken } from '../config/api';

function Explore() {
   // imageModal Context=========================
   const imageModalContext = useContext(ImageModalContext);
   const { changeImageModal } = imageModalContext;

   // Feed / Post Context========================
   const postContext = useContext(PostContext);
   const { feeds, getFeeds, loading } = postContext;

   // const [feeds, setFeeds] = useState([]);
   // const [loading, setLoading] = useState(true);

   // const getFeeds = async () => {
   //    console.log('Running getPost State');
   //    try {
   //       const config = {
   //          headers: {
   //             'Content-type': 'application/json',
   //          },
   //       };
   //       const res = await API.get(`/feed`, config);

   //       setFeeds(res.data.data.feed);
   //       setLoading(false);
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };

   useEffect(() => {
      getFeeds();
   }, []);

   // usestate modal

   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Explore" />
               <div className="image-layout-container">
                  {/* =============== */}
                  {feeds !== null && feeds.length !== 0 ? (
                     !loading ? (
                        feeds?.map((feed) => {
                           return (
                              <PostCard
                                 PP={PP}
                                 feed={feed}
                                 getFeeds={getFeeds}
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
      </div>
   );
}

export default Explore;
