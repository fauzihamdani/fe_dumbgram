import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';

function Explore() {
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Explore" />
            </div>
         </div>
      </div>
   );
}

export default Explore;
