import React from 'react';
import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/CreatePost/createpost.css';

function EditProfile() {
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />

            <div className="pages-container-padding">
               <PageTitle title="Create Post" />
               <div className="form-edit-profile-container">
                  <form>
                     <input
                        type="file"
                        name="uploadphotosvideos"
                        id="img"
                        style={{ display: 'none' }}
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
                           type="text"
                           name="username"
                           className="form-size-100 form-design"
                           style={{ height: '25rem' }}
                           placeholder="Caption"
                        ></textarea>
                     </div>
                     <div className="input-button-edit-profile">
                        <div className="null"></div>
                        <div
                           className="upload-photos-button clicked button-a"
                           for="img"
                           style={{ width: '15rem' }}
                        >
                           <p
                              style={{ fontWeight: 'bold' }}
                              className="edit-profile"
                           >
                              Upload
                           </p>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EditProfile;
