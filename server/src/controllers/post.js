const { Post, User, Follower, Comment, Like } = require('../../models/');
const { addFollower } = require('./follower');

exports.getPosts = async (req, res) => {
   try {
      const feed = await Post.findAll({
         include: [
            {
               model: User,
               attributes: {
                  exclude: ['createdAt', 'updatedAt', 'password', 'id'],
               },
               as: 'user',
            },
            {
               model: Comment,
               attributes: { exclude: ['createdAt', 'updatedAt'] },
               as: 'comment',
            },
            {
               model: Like,
               attributes: { exclude: ['createdAt', 'updatedAt', 'idUser'] },
               as: 'likes',
            },
         ],
      });

      res.send({
         status: 'success',
         data: {
            feed: feed,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.addPost = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);
      const idUser = req.user.id;
      // console.log(idUser);

      // if (!req.files.image)
      //     return res.status(400).send({
      //         status: "fail",
      //         message: "image not found",
      //     });

      // const getLikesCount = await Like.findAll({
      //     where:
      // })

      const feed = await Post.create({
         caption: req.body.caption,
         filename: req.body.filename,
         userId: idUser,
      });

      //   const getLike = await Like.findAll({
      //      where: { idPost: feed.id },
      //   });

      const feedWithUser = await Post.findOne({
         where: { id: feed.id },
         include: [
            {
               model: User,
               attributes: {
                  exclude: ['password', 'createdAt', 'updatedAt', 'usernotif'],
               },
               as: 'user',
            },
            {
               model: Like,
               attributes: {
                  exclude: ['idUser'],
               },
               as: 'likes',
            },
         ],
         attributes: { exclude: ['userId', 'id', 'createdAt', 'updatedAt'] },
      });

      res.send({
         status: 'success',
         data: {
            feed: feedWithUser,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.addLike = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);
      const idUser = req.user.id;
      console.log(idUser);

      // if (!req.files.image)
      //     return res.status(400).send({
      //         status: "fail",
      //         message: "image not found",
      const id = req.body.id;
      //     });

      const feed = await Post.findByPk(id);
      // console.log(feed.like);

      const result = { like: feed.like + 1 };

      const updateLike = await Post.update(result, {
         where: {
            id,
         },
      });

      res.send({
         status: 'success',
         data: {
            feed: feed.id,
            data: feed.like,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getPostsByFollowed = async (req, res) => {
   try {
      const getFollower = await Follower.findAll({
         where: {
            userid: req.user.id,
         },
         attributes: ['userFollowId'],
         // as: 'getuserToId',
      });

      var arrOfFollower = [];

      getFollower.map((followerId) => {
         arrOfFollower.push(followerId.userFollowId);
      });

      const feed = await Post.findAll({
         where: { userId: arrOfFollower },
         attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
         order: [['createdAt', 'ASC']],
         include: {
            model: User,
            attributes: {
               exclude: [
                  'createdAt',
                  'updatedAt',
                  'password',
                  'image',
                  'bio',
                  'usernotif',
               ],
            },
            as: 'user',
         },
      });

      res.send({
         status: 'success',
         data: {
            feed: feed,
         },
      });
   } catch (error) {
      console.log(error);
   }
};
