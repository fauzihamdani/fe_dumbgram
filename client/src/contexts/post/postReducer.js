export default (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case 'ADD_FEED':
         return {
            ...state,
            loading: false,
         };

      case 'GET_FEEDS':
         const data = {
            id: payload.id,
            caption: payload.caption,
            filename: payload.filename,
            like: payload.like,
            userId: payload.userId,
            createdAt: payload.createdAt,
            updatedAt: payload.updatedAt,
            user: payload.user,
            comment: payload.comment,
            likes: payload.likes,
         };
         return {
            ...state,
            feeds: payload,
            loading: false,
         };
      case 'GET_FEEDS_BY_FOLLOWED':
         return {
            ...state,
            feeds: payload,
            loading: false,
         };

      case 'GET_FEEDS_BY_ID':
         return {
            ...state,
            feeds: payload,
            loading: false,
         };

      case 'GET_COMMENTS_BY_ID':
         return {
            ...state,
            comments: payload,
            loading: false,
         };

      case 'ADD_LIKE':
         return {
            ...state,
            loading: false,
            likes: payload,
         };
      case 'ADD_COMMENT':
         return {
            ...state,
            loading: false,
            add: payload,
         };

      default:
         throw new Error();
   }
};
