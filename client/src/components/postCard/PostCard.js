import { useContext, useEffect, useState } from 'react';

import { FaRegHeart, FaHeart, FaComment } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import PostContext from '../../contexts/post/postContext';
import AuthContext from '../../contexts/auth/authContext';
import { Modal } from 'react-bootstrap';
import ImageModal from '../../components/imageModal/ImageModal';

function PostCard({ PP, feed, dataModal }) {
   //
   //
   // Initial AuthContext======================
   const authContext = useContext(AuthContext);
   const { userData } = authContext;
   // =========================================
   //
   //
   //  Add Like Button function================
   const addLikeButton = (idPost, userId, like) => {
      if (like) {
         setLiked((prev) => [...prev, { userId: userId }]);
         addLike(idPost);
         feed.likes.length += 1;
      } else {
         setLiked((prev) => prev.filter((like) => like.userId !== userId));
         addLike(idPost);
         feed.likes.length -= 1;
      }
   };
   const [liked, setLiked] = useState(feed.likes);
   const isLiked =
      liked.length > 0 &&
      liked.filter((like) => like.userId === userData.id).length > 0;
   // =========================================
   //
   //
   // ============== Modal image Controller====================
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = (name, caption) => {
      setShow(true);
   };
   // ==========================================================
   //
   //
   // Initial Post Context=====================
   const postContext = useContext(PostContext);
   const { likes, addLike } = postContext;
   // =========================================
   //
   //
   // Get Comments
   // useEffect(() => {
   //    getCommentsById(feed.id);
   // }, []);

   return (
      <div
         className="image-layout-model rounded style-1 clicked"
         key={feed.id}
         id={feed.id}
      >
         {show && (
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
                  caption={feed.caption}
                  name={feed.user.name}
                  likes={feed.likes.length}
                  image={`http://localhost:5000/uploads/${feed.filename}`}
                  isLiked={isLiked}
                  addLikeButton={addLikeButton}
                  feedId={feed.id}
                  userDataId={userData.id}
               />
            </Modal>
         )}

         <img
            onClick={() => handleShow(feed.user.name, feed.caption)}
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
                  <img className="image-size-100" src={PP} alt="" srcset="" />
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
                     onClick={() =>
                        addLikeButton(
                           feed.id,
                           userData.id,
                           isLiked ? false : true
                        )
                     }
                  >
                     {isLiked ? (
                        <i style={{ fontSize: '2.5rem', color: 'red' }}>
                           <FaHeart />
                        </i>
                     ) : (
                        <i style={{ fontSize: '2rem' }}>
                           <FaRegHeart />
                        </i>
                     )}
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
                     {' '}
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
                  {feed.likes.length} Like
               </div>
            </div>
         </div>
      </div>
   );
}

export default PostCard;
