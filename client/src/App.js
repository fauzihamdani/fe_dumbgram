import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';

import PrivateRoute from './components/routes/PrivateRoute';
import AuthState from './contexts/auth/authState';
import PostState from './contexts/post/postState';
import FollowerState from './contexts/follower/followerState';
import ImageModalState from './contexts/imageModal/imageModalState';

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

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

function App() {
   return (
      <div className="App">
         <AuthState>
            <PostState>
               <FollowerState>
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
               </FollowerState>
            </PostState>
         </AuthState>
      </div>
   );
}

export default App;
