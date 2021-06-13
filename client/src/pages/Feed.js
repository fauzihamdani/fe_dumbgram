import { useState } from 'react';
import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/imageLayout/image-layout.css';
import wtf from '../assets/img/waterfall.png';
import { FaRegHeart, FaHeart, FaComment } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { Modal } from 'react-bootstrap';
import PP from '../assets/img/ppchat.png';
function Feed() {
   // ============== Modal Login Controller====================
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   // ==========================================================
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Feed" />
               <div className="image-layout-container">
                  {/* <Modal
                     // dialogClassName="modal-90w"
                     onHide={handleClose}
                     style={{ borderRadius: '5px' }}
                     aria-labelledby="contained-modal-title-vcenter"
                     centered
                  > */}
                  <div className="image-layout-model rounded style-1 clicked">
                     <img
                        onClick={handleShow}
                        className="image-size-100 rounded"
                        src={wtf}
                        alt="wtf"
                     />

                     <div className="image-info">
                        <div className="image-info-user">
                           <div
                              style={{ width: '4rem', height: '4rem' }}
                              className="bg-image-pp-colorfull"
                           ></div>
                           <div style={{ color: 'white', fontSize: '1.8rem' }}>
                              yaelah gini doang
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
                              style={{ color: 'white', fontSize: '1.8rem' }}
                           >
                              156.260 Like
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* </Modal> */}

                  <Modal
                     className="modal-container modal-90w"
                     // dialogClassName="modal-90w"
                     size="lg"
                     show={show}
                     onHide={handleClose}
                     // centered
                     rounded
                  >
                     <div
                        className="modal-feed-container"
                        style={
                           {
                              // color: 'black',
                              // fontSize: '5rem',
                              // height: '90rem',
                              // width: '100%',
                              // backgroundColor: 'green',
                              // borderRadius: '10rem',
                           }
                        }
                     >
                        <div className="modal-feed-image-container">
                           <img
                              className="image-size-100"
                              src={wtf}
                              alt=""
                              srcset=""
                           />
                        </div>
                        <div className="modal-feed-comments-container">
                           <div className="modal-feed-close-button-container">
                              <div className="modal-feed-close-null"></div>
                              <div
                                 className="modal-feed-close-button clicked button-a"
                                 onClick={handleClose}
                              >
                                 X
                              </div>
                           </div>
                           <div className="comment-form--comment-container">
                              <div className="caption-container">
                                 <div
                                    className=" display-flex"
                                    style={{
                                       alignItems: 'center',
                                       gap: '1rem',
                                       marginBottom: '1rem',
                                       overflowWrap: 'break-word',
                                    }}
                                 >
                                    <div
                                       className="bg-image-pp-colorfull"
                                       style={{
                                          width: '3rem',
                                          height: '3rem ',
                                       }}
                                    >
                                       <img
                                          src={PP}
                                          className="image-size-100"
                                          alt=""
                                          srcset=""
                                       />
                                    </div>
                                    <div className="text-modal-color-white">
                                       Zayn
                                    </div>
                                 </div>

                                 <div
                                    className="caption-text text-modal-color"
                                    style={{ marginBottom: '3rem' }}
                                 >
                                    Caption HereCaption HereCaption
                                 </div>
                              </div>

                              <div className="comment-scroll-container">
                                 <div
                                    className="comment-content-container"
                                    style={{
                                       marginBottom: '2rem',
                                    }}
                                 >
                                    <div
                                       className="modal-image-name-container"
                                       style={{
                                          // marginTop: '1rem',
                                          padding: '2rem 0',
                                          width: '29rem',
                                          overflowWrap: 'break-word',
                                          display: 'flex',
                                          gap: '1rem',
                                          alignItems: 'center',
                                       }}
                                    >
                                       <div className="1 ">
                                          <div
                                             className="bg-image-pp-colorfull"
                                             style={{
                                                width: '3rem',
                                                height: '3rem ',
                                             }}
                                          >
                                             <img
                                                src={PP}
                                                className="image-size-100"
                                                alt=""
                                                srcset=""
                                             />
                                          </div>
                                       </div>
                                       <div
                                          className="2 text-modal-color-white"
                                          style={{
                                             overflowWrap: 'break-word',
                                             width: '20rem',
                                          }}
                                       >
                                          {' '}
                                          Zayn
                                       </div>
                                    </div>
                                    <div className="text-modal-color">
                                       Comment hereComment hereComment
                                       hereComment hereComment hereComment
                                       hereComment hereComment here
                                    </div>
                                 </div>
                              </div>

                              <div
                                 className="actions-modal-wrapper"
                                 style={{
                                    fontSize: '1.5rem',
                                    display: 'flex',
                                    gap: '1rem',
                                    justifyContent: 'flex-end',
                                 }}
                              >
                                 <div
                                    className="actions-modal-inner-wrapper-null"
                                    style={{
                                       flex: '1',
                                    }}
                                 ></div>
                                 <div className="actions-modal-inner-wrapper">
                                    <div
                                       className=""
                                       style={{
                                          fontSize: '1.5rem',
                                          display: 'flex',
                                          gap: '1rem',
                                          justifyContent: 'flex-end',
                                       }}
                                    >
                                       <i
                                          className="text-modal-color button-a clicked"
                                          style={{ fontSize: '2rem' }}
                                       >
                                          <FaRegHeart />
                                       </i>{' '}
                                       <i
                                          className="text-modal-color button-a clicked"
                                          style={{ fontSize: '2rem' }}
                                       >
                                          <BsChat />
                                       </i>{' '}
                                       <i
                                          className="text-modal-color button-a clicked"
                                          style={{ fontSize: '2rem' }}
                                       >
                                          <AiOutlineSend />
                                       </i>
                                    </div>
                                    <div
                                       className="text-modal-color"
                                       style={{ fontSize: '1.7rem' }}
                                    >
                                       156.290 Like
                                    </div>
                                 </div>
                              </div>

                              <div className="comment-input-container">
                                 <form action="">
                                    <input
                                       spellcheck="false"
                                       style={{
                                          height: '4rem',
                                          border: 'none',
                                       }}
                                       className="form-size-100 form-design"
                                       type="text"
                                       name="comment"
                                       id=""
                                       //    value=""
                                       placeholder="Comment"
                                    />
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Modal>
                  <div className="image-layout-model rounded style-2">
                     <img
                        src={wtf}
                        className="image-size-100 rounded"
                        alt="wtf"
                     />
                  </div>
                  <div className="image-layout-model rounded style-3">
                     <img
                        src={wtf}
                        className="image-size-100 rounded"
                        alt="wtf"
                     />
                  </div>
                  <div className="image-layout-model rounded style-4">
                     <img
                        src={wtf}
                        className="image-size-100 rounded"
                        alt="wtf"
                     />
                  </div>
                  <div className="image-layout-model rounded style-5">
                     <img
                        src={wtf}
                        className="image-size-100 rounded"
                        alt="wtf"
                     />
                  </div>
                  <div className="image-layout-model rounded style-6">
                     <img
                        src={wtf}
                        className="image-size-100 rounded"
                        alt="wtf"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Feed;
