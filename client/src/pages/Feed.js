import Navbar from '../components/reusable/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import PageTitle from '../components/pageTitle/PageTitle';
import '../styles/imageLayout/image-layout.css';
import wtf from '../assets/img/waterfall.png';

function Feed() {
   return (
      <div>
         <Navbar />
         <div className="container__2 display-flex">
            <Sidebar />
            <div className="pages-container-padding ">
               <PageTitle title="Feed" />
               <div className="image-layout-container">
                  <div>
                     <div className="image-layout-model style-1">
                        <img src={wtf} alt="wtf" />
                     </div>
                     <div
                        style={{ backgroundColor: 'red', width: '3rem' }}
                     ></div>
                  </div>

                  <div className="image-layout-model style-2">
                     <img src={wtf} alt="wtf" />
                  </div>
                  <div className="image-layout-model style-3">
                     <img src={wtf} alt="wtf" />
                  </div>
                  <div className="image-layout-model style-4">
                     <img src={wtf} alt="wtf" />
                  </div>
                  <div className="image-layout-model style-5">
                     <img src={wtf} alt="wtf" />
                  </div>
                  <div className="image-layout-model style-6">
                     <img src={wtf} alt="wtf" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Feed;
