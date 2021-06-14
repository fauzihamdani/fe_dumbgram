const express = require('express');
const router = express.Router();
const { authenticated } = require('../middlewares/auth');
const { checkRolePartner, checkRoleUser } = require('../middlewares/checkRole');

const {
   getUser,
   registerUser,
   deleteUser,
   login,
   getUserById,
   checkAuth,
   getUserProfile,
   updateUser,
} = require('../controllers/user');

const {
   getPosts,
   addPost,
   // addLike,
   getPostsByFollowed,
} = require('../controllers/post');

const {
   addFollower,
   getFollowing,
   getFollower,
} = require('../controllers/follower');

const { addComment, getComment } = require('../controllers/comment');
const { insertChat, getChat } = require('../controllers/chat');
const { addLike } = require('../controllers/like');

// user api
router.get('/users', getUser);
router.get('/user-by-id/:id', authenticated, getUserById);
router.post('/user-login', login);
router.post('/register', registerUser);
router.delete('/user/:id', authenticated, deleteUser);
router.patch('/user/:iduser', authenticated, updateUser);

// feed api
router.get('/feed', getPosts);
router.post('/feed', authenticated, addPost);
// router.post('/like', authenticated, addLike);
router.get('/feed-by-followed', authenticated, getPostsByFollowed);

// follower api
router.post('/add-follower', authenticated, addFollower);
router.get('/following/:userid', authenticated, getFollowing);
router.get('/follower/:userid', authenticated, getFollower);

// comment api
router.post('/add-comment', authenticated, addComment);
router.get('/comments/:idfeed', authenticated, getComment);

// chat api
router.post('/message/:iduserto', authenticated, insertChat);
router.get('/message/:usertoid', authenticated, getChat);

//like api
router.post('/like', authenticated, addLike);

module.exports = router;
