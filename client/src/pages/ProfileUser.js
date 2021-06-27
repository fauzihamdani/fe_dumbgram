import { useState, useContext, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Navbar from '../components/reusable/Navbar';
import SidebarUserProfile from '../components/sidebar/SidebaruserProfile';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/imageLayout/image-layout.css';
import PostCard from '../components/postCard/PostCard';
import { Modal } from 'react-bootstrap';
import wtf from '../assets/img/waterfall.png';
import PP from '../assets/img/ppchat.png';
import PostContext from '../contexts/post/postContext';
import ImageModalContext from '../contexts/imageModal/imageModalContext';
import ImageModal from '../components/imageModal/ImageModal';
import AuthContext from '../contexts/auth/authContext';

function ProfileUser() {
   const params = useParams();
   const { id } = params;

   // imageModal Context=========================
   const imageModalContext = useContext(ImageModalContext);
   const { changeImageModal } = imageModalContext;

   // usestate modal
   const [dataModal, setDataModal] = useState({
      name: '',
      caption: '',
      // filename:'',
      // comment:null,
      // like:''
   });

   // Feed / Post Context========================
   const postContext = useContext(PostContext);
   const { feedProfile, getFeedsById, loading } = postContext;
   //
   //
   // auth Context========================
   const authContext = useContext(AuthContext);
   const { userInfo, getUserInfo, userData, loadUser } = authContext;

   useEffect(() => {
      getFeedsById(id);
      getUserInfo(id);
      loadUser();
   }, []);

   // ============== Modal image Controller====================
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = (name, caption) => {
      setDataModal({ ...dataModal, name: dataModal.name });
      setDataModal({ ...dataModal, caption: dataModal.caption });

      setShow(true);
   };
   // ==========================================================
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <SidebarUserProfile />
            <div className="pages-container-padding ">
               {userInfo?.id === userData?.id ? (
                  <PageTitle title={`Your, Feed(s) `} />
               ) : (
                  <PageTitle title={`${userInfo?.name}'s, Feed(s) `} />
               )}

               <div className="image-layout-container">
                  {/* =============== */}
                  {feedProfile !== null || feedProfile.length !== 0 ? (
                     !loading ? (
                        feedProfile?.map((feed) => {
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
      </div>
   );
}

export default ProfileUser;
