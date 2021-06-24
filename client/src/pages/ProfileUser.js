import Navbar from '../components/reusable/Navbar';
import SidebarUserProfile from '../components/sidebar/SidebaruserProfile';
import PageTitle from '../components/pageTitle/PageTitle';

function ProfileUser() {
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <SidebarUserProfile />
            <div className="pages-container-padding ">
               <PageTitle title="Zayn's, Feed" />
            </div>
         </div>
      </div>
   );
}

export default ProfileUser;
