import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useState, useContext } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
//
import AuthContext from './contexts/auth/authContext';
import AuthState from './contexts/auth/authState';
import Index from './pages/Index';
import Message from './pages/Message';
import EditProfile from './pages/EditProfile';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import MessageChoosen from './pages/MessageChoosen';
import ProfileUser from './pages/ProfileUser';
import Explore from './pages/Explore';

function App() {
   // ======================Auth Context======================================================================
   const authContext = useContext(AuthContext);
   const { isLogin } = authContext;
   // ========================================================================================================
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/" component={Index} exact />

               {isLogin ? (
                  <Switch>
                     <Route path="/create-post" component={CreatePost} exact />
                     <Route path="/message" component={Message} exact />
                     <Route
                        path="/selected-message"
                        component={MessageChoosen}
                        exact
                     />
                     <Route
                        path="/edit-profile"
                        component={EditProfile}
                        exact
                     />
                     <Route path="/feed" component={Feed} exact />
                     <Route path="/explore" component={Explore} exact />
                     <Route
                        path="/user-profile"
                        component={ProfileUser}
                        exact
                     />
                  </Switch>
               ) : (
                  <Redirect to="/" />
               )}
            </Switch>
         </Router>
      </div>
   );
}

export default App;
