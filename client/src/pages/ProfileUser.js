import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';

function ProfileUser() {
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Zayn's, Feed" />
            </div>
         </div>
      </div>
   );
}

export default ProfileUser;
