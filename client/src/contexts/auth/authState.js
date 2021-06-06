import { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = (children) => {
   const initialState = {
      isLogin: false,

      error: null,
   };
   const [state, dispatch] = useReducer(AuthReducer, initialState);

   const login = () => {
      try {
         dispatch({
            type: 'LOGIN_SUCCESS',
         });
      } catch (err) {
         console.log(err);
         dispatch({
            type: 'LOGIN_FAIL',
            payload: 'err.response.data.msg',
         });
      }
   };

   const logout = () => {
      try {
         dispatch({
            type: 'LOGOUT',
         });
      } catch (error) {
         dispatch({ type: 'REGISTER_FAIL', payload: 'error' });
      }
   };

   const register = () => {
      try {
         dispatch({
            type: 'REGISTER_SUCCESS',
         });
      } catch (error) {
         dispatch({ type: 'REGISTER_FAIL', payload: 'error' });
      }
   };

   return (
      <AuthContext.Provider
         value={{
            isLogin: state.isLogin,
            login,
            logout,
            register,
         }}
      >
         {children.children}
      </AuthContext.Provider>
   );
};

export default AuthState;
