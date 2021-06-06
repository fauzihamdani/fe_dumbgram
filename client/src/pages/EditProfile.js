import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/EditProfile/EditProfile.css';

function EditProfile() {
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />

            <div className="pages-container-padding">
               <PageTitle title="Edit Profile" />
               <div className="form-edit-profile-container">
                  <form>
                     <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        style={{ display: 'none' }}
                     />
                     <label
                        className="upload-photos-button clicked button-a"
                        for="img"
                        style={{ width: '15rem' }}
                     >
                        <p className="edit-profile">Upload Photo</p>
                     </label>

                     <div className="input-name-container">
                        <input
                           type="text"
                           name="name"
                           className="form-size-100 form-design"
                           placeholder="Name"
                        />
                     </div>
                     <div className="input-name-container">
                        <input
                           type="text"
                           name="username"
                           className="form-size-100 form-design"
                           placeholder="Username"
                        />
                     </div>
                     <div className="input-name-container">
                        <textarea
                           spellcheck="false"
                           type="text"
                           name="username"
                           className="form-size-100 form-design"
                           style={{ height: '25rem' }}
                           placeholder="Bio"
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
                              Save
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
