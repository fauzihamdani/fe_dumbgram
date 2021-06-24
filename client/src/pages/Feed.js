import { useState, useContext, useEffect } from 'react';
import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/imageLayout/image-layout.css';

import { Modal } from 'react-bootstrap';
import { FaRegHeart, FaHeart, FaComment } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import wtf from '../assets/img/waterfall.png';
import PP from '../assets/img/ppchat.png';
import PostContext from '../contexts/post/postContext';
import ImageModalContext from '../contexts/imageModal/imageModalContext';
import ImageModal from '../components/imageModal/ImageModal';

function Feed() {
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
   const { feeds, getFeeds, loading } = postContext;

   useEffect(() => {
      getFeeds();
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
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Feed" />
               <pre style={{ color: 'white', fontSize: '1.5rem' }}>
                  {JSON.stringify(feeds, 2, 4)}
               </pre>
               <div className="image-layout-container">
                  {/* =========== */}
                  {feeds !== null && !loading ? (
                     feeds.map((feed) => {
                        return (
                           <div
                              className="image-layout-model rounded style-1 clicked"
                              key={feed.id}
                              id={feed.id}
                           >
                              <img
                                 onClick={() =>
                                    handleShow(feed.user.name, feed.caption)
                                 }
                                 className="image-size-100 rounded"
                                 src={`http://localhost:5000/uploads/${feed.filename}`}
                                 alt="wtf"
                              />

                              <div className="image-info">
                                 <div className="image-info-user">
                                    <div
                                       style={{ width: '4rem', height: '4rem' }}
                                       className="bg-image-pp-colorfull"
                                    >
                                       <img
                                          className="image-size-100"
                                          src={PP}
                                          alt=""
                                          srcset=""
                                       />
                                    </div>
                                    <div
                                       style={{
                                          color: 'white',
                                          fontSize: '1.8rem',
                                       }}
                                    >
                                       {feed.user.username}
                                    </div>
                                 </div>

                                 <div className="image-info-user-count">
                                    <div className="icons-container">
                                       <div
                                          style={{
                                             color: 'white',
                                             fontSize: '1.2rem',
                                          }}
                                          className="clicked button-a like-icon"
                                       >
                                          <i style={{ fontSize: '2rem' }}>
                                             <FaRegHeart />
                                          </i>
                                       </div>
                                       <div
                                          style={{
                                             color: 'white',
                                             fontSize: '1.2rem',
                                          }}
                                          className="clicked button-a comment-icon"
                                       >
                                          <i style={{ fontSize: '2rem' }}>
                                             <BsChat />
                                          </i>
                                       </div>
                                       <div
                                          style={{
                                             color: 'white',
                                             fontSize: '1.2rem',
                                          }}
                                          className="clicked button-a send-message-icon"
                                       >
                                          <i style={{ fontSize: '2rem' }}>
                                             <AiOutlineSend />
                                          </i>
                                       </div>
                                    </div>
                                    <div
                                       className="like-count-container"
                                       style={{
                                          color: 'white',
                                          fontSize: '1.8rem',
                                       }}
                                    >
                                       {feed.likes.length} Like{' '}
                                       {dataModal.caption}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        );
                     })
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

export default Feed;
