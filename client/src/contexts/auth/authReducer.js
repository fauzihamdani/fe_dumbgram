export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
         return {
            isLogin: true,
         };

      case 'LOGOUT':
         return {
            isLogin: false,
         };

      default:
         throw new Error();
   }
};
