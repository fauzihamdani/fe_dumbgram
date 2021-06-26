import { useState, useEffect, useContext } from 'react';
import { FaRegHeart, FaHeart, FaComment } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import PP from '../../assets/img/ppchat.png';
import PostContext from '../../contexts/post/postContext';

function ImageModal({
   caption,
   name,
   likes,
   image,
   isLiked,
   addLikeButton,
   feedId,
   userDataId,
}) {
   // Initial Post Context=====================
   const postContext = useContext(PostContext);
   const { getCommentsById, comments, addComment } = postContext;
   // =========================================
   // Get Comments
   useEffect(() => {
      getCommentsById(feedId);
   }, []);
   //
   //
   // Comment Form Initialization
   const [commentForm, setCommentForm] = useState({
      comment: '',
   });
   const { comment } = commentForm;

   const onChange = (e) => {
      const updateCommentForm = { ...commentForm };
      updateCommentForm[e.target.name] = e.target.value;
      setCommentForm(updateCommentForm);
   };

   const submitComment = (comment, feedId) => {
      const formData = new FormData();
      formData.set('comment', commentForm.comment);

      addComment(comment, feedId);
   };

   return (
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
            <img className="image-size-100" src={image} alt="" srcset="" />
         </div>
         <div className="modal-feed-comments-container">
            <div className="modal-feed-close-button-container">
               <div className="modal-feed-close-null"></div>
               <div
                  className="modal-feed-close-button clicked button-a"
                  // onClick={handleClose}
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
                     <div className="text-modal-color-white">{name}</div>
                  </div>

                  <div
                     className="caption-text text-modal-color"
                     style={{ marginBottom: '3rem' }}
                  >
                     {caption}
                  </div>
               </div>

               <div className="comment-scroll-container">
                  {/* ---------- */}
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
                        Comment hereComment hereComment hereComment hereComment
                        hereComment hereComment hereComment here
                     </div>
                  </div>
                  {/* ---------- */}
                  {comments?.length > 0 ? 'true' : 'false'}
                  {comments?.map((commentResult) => (
                     <h1>{commentResult.comment}</h1>
                  ))}
                  <pre
                     style={{
                        color: 'white',
                        fontSize: '1.8rem',
                     }}
                  >
                     {JSON.stringify(comments, 2, 4)}
                     {console.log(comments)}
                  </pre>
               </div>

               <div
                  className="actions-modal-wrapper"
                  style={{
                     fontSize: '1.5rem',
                     display: 'flex',
                     gap: '0.5rem',
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
                        onClick={() =>
                           addLikeButton(
                              feedId,
                              userDataId,
                              isLiked ? false : true
                           )
                        }
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
                           {isLiked ? (
                              <i style={{ fontSize: '2rem', color: 'red' }}>
                                 <FaHeart />
                              </i>
                           ) : (
                              <i style={{ fontSize: '2rem' }}>
                                 <FaRegHeart />
                              </i>
                           )}
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
                        {likes} Like
                     </div>
                  </div>
               </div>

               <div className="comment-input-container">
                  <form
                     onSubmit={(e) => {
                        submitComment(comment, feedId);
                        e.preventDefault();
                     }}
                     autocomplete="off"
                  >
                     <input
                        spellcheck="false"
                        style={{
                           height: '4rem',
                           border: 'none',
                        }}
                        className="form-size-100 form-design"
                        type="text"
                        name="comment"
                        value={comment}
                        id=""
                        onChange={onChange}
                        placeholder="Comment"
                     />
                     <input type="submit" />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ImageModal;
{
   /* Looping Comment */
}

// {comments > 0 &&
//    comments.map((comment) => {
//       {
//          comment ? <div>true</div> : <div>false</div>;
//       }
//       <div>{comment.comment}</div>;
// <div
//    className="comment-content-container"
//    style={{
//       marginBottom: '2rem',
//    }}
// >
//    <div
//       className="modal-image-name-container"
//       style={{
//          // marginTop: '1rem',
//          padding: '2rem 0',
//          width: '29rem',
//          overflowWrap: 'break-word',
//          display: 'flex',
//          gap: '1rem',
//          alignItems: 'center',
//       }}
//    >
//       <div className="1 ">
//          <div
//             className="bg-image-pp-colorfull"
//             style={{
//                width: '3rem',
//                height: '3rem ',
//             }}
//          >
//             <img
//                src={PP}
//                className="image-size-100"
//                alt=""
//                srcset=""
//             />
//          </div>
//       </div>
//       <div
//          className="2 text-modal-color-white"
//          style={{
//             overflowWrap: 'break-word',
//             width: '20rem',
//          }}
//       >
//          {' '}
//          {comment.user.name}
//       </div>
//    </div>
//    <div className="text-modal-color">
//       {comment.comment}
//    </div>
// </div>;
// })}
{
   /* End Looping container */
}
