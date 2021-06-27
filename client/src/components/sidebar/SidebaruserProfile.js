import { useState, useEffect, useContext } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import '../../styles/sidebar/sidebar.css';
import EditIcon from '../../assets/svg/edit.svg';
import PP from '../../assets/img/ppchat.png';
import Explore from '../../assets/svg/explore.svg';
import Feed from '../../assets/svg/feed.svg';
import Logout from '../../assets/svg/logout.svg';
import AuthContext from '../../contexts/auth/authContext';
import FollowerContext from '../../contexts/follower/followerContext';
import { useHistory } from 'react-router';
function SidebarProfile() {
   const params = useParams();
   const { id } = params;
   const history = useHistory();
   const location = useLocation();

   // get follower info context====================
   const followerContext = useContext(FollowerContext);
   const {
      getFollowers,
      followers,
      getFollowing,
      following,
      loadingFollower,
      loadingFollowing,
      addFollower,
      followerLength,
      followingLength,
   } = followerContext;
   // *
   // *

   // get user info context====================
   const authContext = useContext(AuthContext);
   const {
      logout,
      isLogin,
      userData,
      loadUser,
      loading,
      userInfo,
      getUserInfo,
   } = authContext;
   // *
   // *

   // logout functionality====================================
   const submitLogout = () => {
      logout();
      if (!isLogin) {
         history.push('/');
      }
   };
   // *
   // *

   // isFollowed???========================================
   var isFollowed =
      followers &&
      followers.find((userFollower) => userFollower?.userId === userData?.id);
   const [followedUser, setFollowedUser] = useState(isFollowed);
   // *
   // *

   // Get User Data Followers=================================
   useEffect(() => {
      getUserInfo(id);
   }, []);

   useEffect(() => {
      getFollowers(id);

      isFollowed ? setFollowedUser(true) : setFollowedUser(false);
   }, []);

   useEffect(() => {
      getFollowing(id);
   }, []);
   // *
   // *

   // load userLogin=======================================
   useEffect(() => {
      loadUser();
   }, []);

   // *
   // *

   // Click Follow==========================================
   const addFollow = () => {
      const addFollowData = { userFollowId: userInfo?.id };
      // setFollowedUser(!isFollowed);
      // isFollowed ? console.log('followed') : console.log('follow!');
      // getFollowers(id);
      // getFollowing(id);
      // const addFollowData = { userFollowId: userInfo?.id };
      addFollower(addFollowData, id);
      // setFollowedUser(!isFollowed);
   };

   return !loadingFollower ? (
      <div className="public-sidebar-container">
         {userData?.id === userInfo?.id ? (
            <div className="edit-icon-container-outter">
               <div className="asd"></div>
               <div className="edit-icon-container clicked button-a">
                  <img
                     className="image-size-100"
                     src={EditIcon}
                     alt=""
                     srcset=""
                  />
               </div>
            </div>
         ) : (
            <div></div>
         )}

         <Link to={`/user-profile/${userInfo?.id}`}>
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
                     <h1>{userInfo?.name}</h1>{' '}
                  </div>
                  <div className="public-sidebar-username-account">
                     <p>@{userInfo?.username}</p>
                  </div>
               </div>
            </div>
         </Link>

         {userData?.id === userInfo?.id ? (
            <div></div>
         ) : (
            <div>
               {' '}
               <div className="message-unfollow-container">
                  <div className="sidebar-message-button clicked button-a">
                     {' '}
                     <p>Message</p>
                  </div>
                  <div
                     className="sidebar-follow-button clicked button-a"
                     onClick={addFollow}
                  >
                     {isFollowed ? <p>Unfollow</p> : <p>Follow</p>}
                  </div>
               </div>
            </div>
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
                  {loadingFollower ? <div>loading...</div> : followerLength}
               </div>
            </div>
            <div className="public-sidebar-following-count-container public-sidebar-flex-col">
               <div className="public-sidebar-following public-sidebar-text-info">
                  Following
               </div>
               <div className="public-sidebar-following-number public-sidebar-number-info">
                  {loadingFollowing ? <div>loading...</div> : followingLength}
               </div>
            </div>
         </div>

         <div className="bio-container">
            <p>{userInfo?.bio}</p>
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
   ) : (
      <h1>Loading</h1>
   );
}

export default SidebarProfile;
