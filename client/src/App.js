import React, { useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';

import PrivateRoute from './components/routes/PrivateRoute';

import PostState from './contexts/post/postState';
import FollowerState from './contexts/follower/followerState';
import ImageModalState from './contexts/imageModal/imageModalState';
import LikeState from './contexts/like/likeState';

import Index from './pages/Index';
import { setAuthToken } from './config/api';
import Message from './pages/Message';
import EditProfile from './pages/EditProfile';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import MessageChoosen from './pages/MessageChoosen';
import ProfileUser from './pages/ProfileUser';
import Explore from './pages/Explore';
import { useHistory } from 'react-router';
import AuthContext from './contexts/auth/authContext';

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

function App() {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, loadUser } = authContext;

   useEffect(() => {
      loadUser();
      // eslint-disable-next-line
   }, []);
   return (
      <div className="App">
         <PostState>
            <FollowerState>
               <LikeState>
                  <ImageModalState>
                     <Router>
                        <Switch>
                           <Route path="/" component={Index} exact />

                           <PrivateRoute
                              path="/create-post"
                              component={CreatePost}
                              exact
                           />
                           <PrivateRoute
                              path="/message"
                              component={Message}
                              exact
                           />
                           <PrivateRoute
                              path="/selected-message"
                              component={MessageChoosen}
                              exact
                           />
                           <PrivateRoute
                              path="/edit-profile"
                              component={EditProfile}
                              exact
                           />
                           <PrivateRoute path="/feed" component={Feed} exact />
                           <PrivateRoute
                              path="/explore"
                              component={Explore}
                              exact
                           />
                           <PrivateRoute
                              path="/user-profile/:id"
                              component={ProfileUser}
                              exact
                           />
                        </Switch>
                     </Router>
                  </ImageModalState>
               </LikeState>
            </FollowerState>
         </PostState>
      </div>
   );
}

export default App;
