import { useReducer } from 'react';

import PostContext from './postContext';
import PostReducer from './postReducer';

import { API, setAuthToken } from '../../config/api';

const PostState = (children) => {
   const initialState = {
      feeds: null,
   };
   const [state, dispatch] = useReducer(PostReducer, initialState);

   const getFeeds = async () => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`/feed`, config);
         dispatch({
            type: 'GET_FEEDS',
            payload: res.data.data.feed,
         });
      } catch (error) {}
   };

   const addFeed = async (formData) => {
      try {
         const config = {
            headers: {
               'Content-type': 'multipart/form-data',
            },
         };
         const res = await API.post(`/feed`, formData, config);

         dispatch({ type: 'ADD_FEED', payload: res.data.link });
      } catch (err) {}
   };

   const getFeedsbyFollowed = async () => {
      try {
         const config = {
            headers: {
               'Content-type': 'application/json',
            },
         };
         const res = await API.get(`/feed-by-followed`, config);
         dispatch({
            type: 'GET_FEEDS_BY_FOLLOWED',
            payload: res.data.data.feed,
         });
      } catch (error) {}
   };

   return (
      <PostContext.Provider
         value={{
            feeds: state.feeds,
            addFeed,
            getFeeds,
         }}
      >
         {children.children}
      </PostContext.Provider>
   );
};

export default PostState;
