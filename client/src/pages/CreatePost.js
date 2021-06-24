import { useState, useContext } from 'react';
import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/CreatePost/createpost.css';
import PostContext from '../contexts/post/postContext';

function EditProfile() {
   const postContext = useContext(PostContext);
   const { addFeed, feeds } = postContext;
   const [postForm, setPostForm] = useState({
      caption: '',
      uploadphotosvideos: '',
   });

   const [preview, setPreview] = useState('');

   const { caption, image } = postForm;

   const onChange = (e) => {
      const updatePostForm = { ...postForm };
      updatePostForm[e.target.name] =
         e.target.type === 'file' ? e.target.files : e.target.value;
      setPostForm(updatePostForm);
      // if (e.target.type === 'file') {
      //    let url = URL.createObjectURL(e.target.files[0]);
      //    setPreview(url);
      //    console.log(url);
      // }
   };

   const submitPost = () => {
      const formData = new FormData();
      formData.set('caption', postForm.caption);
      formData.set(
         'fileUpload',
         postForm.uploadphotosvideos[0],
         postForm.uploadphotosvideos[0].name
      );
      addFeed(formData);
   };
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />

            <div className="pages-container-padding">
               <PageTitle title="Create Post" />
               <div className="form-edit-profile-container">
                  <form
                     onSubmit={(e) => {
                        submitPost();
                        e.preventDefault();
                     }}
                  >
                     <input
                        type="file"
                        name="uploadphotosvideos"
                        id="img"
                        style={{ display: 'none' }}
                        onChange={onChange}
                     />
                     <label
                        className="upload-photos-button clicked button-a"
                        for="img"
                        style={{ width: '20rem', fontWeight: 'bold' }}
                     >
                        <p className="edit-profile">Upload Photos or Videos</p>
                     </label>
                     <div className="input-name-container">
                        <textarea
                           spellcheck="false"
                           type="text"
                           name="caption"
                           className="form-size-100 form-design"
                           style={{ height: '25rem' }}
                           placeholder="Caption"
                           onChange={onChange}
                           value={caption}
                        ></textarea>
                     </div>
                     <div>
                        <button
                           className="input-button-edit-profile"
                           type="submit"
                        >
                           <div className="null"></div>
                           <div
                              className="upload-photos-button clicked button-a"
                              style={{ width: '15rem' }}
                           >
                              <p
                                 style={{ fontWeight: 'bold' }}
                                 className="edit-profile"
                              >
                                 Upload
                              </p>
                           </div>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EditProfile;
