import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/sidebar/sidebar.css';
import EditIcon from '../../assets/svg/edit.svg';
import PP from '../../assets/img/ppchat.png';
import Explore from '../../assets/svg/explore.svg';
import Feed from '../../assets/svg/feed.svg';
import Logout from '../../assets/svg/logout.svg';
import AuthContext from '../../contexts/auth/authContext';
import PostCntext from '../../contexts/post/postContext';
import FollowerContext from '../../contexts/follower/followerContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import PostContext from '../../contexts/post/postContext';
function Sidebar() {
   const history = useHistory();
   const location = useLocation();
   const [showed, setShowed] = useState(true);

   // initialize Post Context
   const postContext = useContext(PostContext);
   const { getFeedsById, feedProfile } = postContext;

   // get follower info context====================
   const followerContext = useContext(FollowerContext);
   const { getFollowers, followers, getFollowing, following } = followerContext;

   // get user info context====================
   const authContext = useContext(AuthContext);
   const { logout, isLogin, userData, loadUser, loading } = authContext;

   // logout functionality
   const submitLogout = () => {
      logout();
      if (!isLogin) {
         history.push('/');
      }
   };
   console.log('=========================================', userData);
   useEffect(() => {
      loadUser();
   }, []);
   //
   //
   // Get User Followwer
   useEffect(() => {
      getFollowers(userData.id);
   }, []);
   //
   //
   // Get User Following
   useEffect(() => {
      getFollowing(userData.id);
   }, []);
   //
   //
   // GetFeed
   useEffect(() => {
      getFeedsById(userData.id);
   }, []);
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
         <Link to={`/user-profile/${userData.id}`}>
            {/* <Link to={`/user-profile/1`}> */}
            <div className="public-sidebar-pp-name-container">
               <div className="public-sidebar-pp-container bg-image-pp-colorfull ">
                  <img
                     className="image-size-100-rounded"
                     src={`http://localhost:5000/uploads/${userData?.image}`}
                     alt=""
                     srcset=""
                  />
               </div>
               <div className="public-sidebar-name-container">
                  <div className="public-sidebar-name-account">
                     <h1>{userData.name}</h1>
                  </div>
                  <div className="public-sidebar-username-account">
                     <p>@{userData.username}</p>
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
                  {feedProfile?.length}
               </div>
            </div>
            <div className="public-sidebar-follower-count-container public-sidebar-flex-col">
               <div className="public-sidebar-followers public-sidebar-text-info">
                  Followers
               </div>
               <div className="public-sidebar-followers-number public-sidebar-number-info">
                  {followers?.length}
               </div>
            </div>
            <div className="public-sidebar-following-count-container public-sidebar-flex-col">
               <div className="public-sidebar-following public-sidebar-text-info">
                  Following
               </div>
               <div className="public-sidebar-following-number public-sidebar-number-info">
                  {following?.length}
               </div>
            </div>
         </div>

         <div className="bio-container">
            <p>{userData.bio}</p>
         </div>

         <div className="feed-explore-container">
            <Link to={'/feed'}>
               <div className="feed-container">
                  <div className="feed-icon-container button-a clicked">
                     <img className="image-size-100" src={Feed} alt="" />
                  </div>
                  {location.pathname === '/feed' ? (
                     <div
                        className="feed-text-container button-a clicked"
                        style={{ color: 'white' }}
                     >
                        {' '}
                        Feed
                     </div>
                  ) : (
                     <div className="feed-text-container button-a clicked">
                        {' '}
                        Feed
                     </div>
                  )}
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
                  {location.pathname === '/explore' ? (
                     <div
                        style={{ color: 'white' }}
                        className="explore-text-container button-a clicked"
                     >
                        Explore
                     </div>
                  ) : (
                     <div className="explore-text-container button-a clicked">
                        Explore
                     </div>
                  )}
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
         {/* <div>{JSON.stringify(userData)}</div>
         <div>{JSON.stringify(following)}</div> */}
      </div>
   );
}

export default Sidebar;
