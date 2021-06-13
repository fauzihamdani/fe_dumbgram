import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/sidebar/sidebar.css';
import EditIcon from '../../assets/svg/edit.svg';
import PP from '../../assets/img/ppchat.png';
import Explore from '../../assets/svg/explore.svg';
import Feed from '../../assets/svg/feed.svg';
import Logout from '../../assets/svg/logout.svg';
import AuthContext from '../../contexts/auth/authContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
function Sidebar() {
   const history = useHistory();
   const location = useLocation();
   const [showed, setShowed] = useState(true);
   const authContext = useContext(AuthContext);
   const { logout, isLogin } = authContext;

   const submitLogout = () => {
      logout();
      if (!isLogin) {
         history.push('/');
      }
   };

   // useEffect(() => {
   //    if (location.pathname === '/edit-profile') {
   //       setShowed(false);
   //    }
   // });
   // const isActive = route => router.pathname === route;

   return (
      <div className="public-sidebar-container">
         {location.pathname === '/edit-profile' ||
         location.pathname === '/user-profile' ? (
            <div></div>
         ) : (
            <div className="edit-icon-container-outter">
               <div className="asd"></div>
               <Link to={'/edit-profile'}>
                  <div className="edit-icon-container clicked button-a">
                     <img
                        className="image-size-100"
                        src={EditIcon}
                        alt=""
                        srcset=""
                     />
                  </div>
               </Link>
            </div>
         )}
         <Link to={'/user-profile'}>
            <div className="public-sidebar-pp-name-container">
               <div className="public-sidebar-pp-container bg-image-pp-colorfull ">
                  <img className="image-size-100" src={PP} alt="" srcset="" />
               </div>
               <div className="public-sidebar-name-container">
                  <div className="public-sidebar-name-account">
                     <h1>Lisa</h1>
                  </div>
                  <div className="public-sidebar-username-account">
                     <p>@lalalisa_m</p>
                  </div>
               </div>
            </div>
         </Link>
         {location.pathname === '/user-profile' ? (
            <div className="message-unfollow-container">
               <div className="sidebar-message-button clicked button-a">
                  {' '}
                  <p>Message</p>
               </div>
               <div className="sidebar-follow-button clicked button-a">
                  <p>Follow</p>
               </div>
            </div>
         ) : (
            <div></div>
         )}

         <div className="public-sidebar-info-user clicked">
            <div className="public-sidebar-post-count-container public-sidebar-flex-col">
               <div className="public-sidebar-post public-sidebar-text-info">
                  Post
               </div>
               <div className="public-sidebar-post-number public-sidebar-number-info">
                  200
               </div>
            </div>
            <div className="public-sidebar-follower-count-container public-sidebar-flex-col">
               <div className="public-sidebar-followers public-sidebar-text-info">
                  Followers
               </div>
               <div className="public-sidebar-followers-number public-sidebar-number-info">
                  512.5 M
               </div>
            </div>
            <div className="public-sidebar-following-count-container public-sidebar-flex-col">
               <div className="public-sidebar-following public-sidebar-text-info">
                  Following
               </div>
               <div className="public-sidebar-following-number public-sidebar-number-info">
                  1
               </div>
            </div>
         </div>

         <div className="bio-container">
            <p>Rapper in Black Pink, Brand Ambasador Penshoppe</p>
         </div>

         <div className="feed-explore-container">
            <Link to={'/feed'}>
               <div className="feed-container">
                  <div className="feed-icon-container button-a clicked">
                     <img className="image-size-100" src={Feed} alt="" />
                  </div>

                  <div className="feed-text-container button-a clicked">
                     {' '}
                     Feed
                  </div>
               </div>
            </Link>
            <Link to={'/explore'}>
               <div className="explore-container">
                  <div className="explore-icon-container">
                     <img
                        className="image-size-100 button-a clicked"
                        src={Explore}
                        alt=""
                     />
                  </div>
                  <div className="explore-text-container button-a clicked">
                     Explore
                  </div>
               </div>
            </Link>
         </div>

         <div className="logout-container" onClick={submitLogout}>
            <div className="explore-icon-container">
               <img
                  className="image-size-100 button-a clicked"
                  src={Logout}
                  alt=""
               />
            </div>
            <div className="explore-text-container button-a clicked">
               Logout
            </div>
         </div>
      </div>
   );
}

export default Sidebar;
