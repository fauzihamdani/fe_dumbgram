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
   const { feeds, getFeeds, getFeedsById, loading } = postContext;

   useEffect(() => {
      getFeedsById(id);
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
               <PageTitle title="Zayn's, Feed" />
               <div className="image-layout-container">
                  {/* =============== */}
                  {feeds === !null ? (
                     !loading ? (
                        feeds.map((feed) => {
                           return (
                              <PostCard
                                 PP={PP}
                                 feed={feed}
                                 handleShow={handleShow}
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

                  <Modal
                     className="modal-container modal-90w"
                     // dialogClassName="modal-90w"
                     size="lg"
                     show={show}
                     onHide={handleClose}
                     // centered
                     rounded
                  >
                     <ImageModal
                        handleClose={handleClose}
                        name={dataModal.name}
                        caption={dataModal.caption}
                     />
                  </Modal>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProfileUser;
