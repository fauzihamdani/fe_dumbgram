const { Post, User, Follower, Comment, Like } = require('../../models/');
const { addFollower } = require('./follower');

exports.getPosts = async (req, res) => {
   try {
      const feed = await Post.findAll({
         attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
         order: [['createdAt', 'DESC']],
         include: [
            {
               model: User,
               attributes: {
                  exclude: ['createdAt', 'updatedAt', 'password'],
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

exports.getPostsById = async (req, res) => {
   try {
      const { userId } = req.params;
      const feed = await Post.findAll({
         where: { userId: userId },
         attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
         order: [['createdAt', 'ASC']],
         include: [
            {
               model: User,
               attributes: {
                  exclude: ['createdAt', 'updatedAt', 'password'],
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

exports.getPostsByUser = async (req, res) => {
   try {
      const feed = await Post.findAll({
         where: { id: req.user.id },
         attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
         order: [['createdAt', 'ASC']],
         include: [
            {
               model: User,
               attributes: {
                  exclude: ['createdAt', 'updatedAt', 'password'],
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
         filename: req.files.fileUpload[0].filename,
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
               model: Comment,
               attributes: { exclude: ['createdAt', 'updatedAt'] },
               as: 'comment',
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
            userId: req.user.id,
         },
         attributes: ['userFollowId'],
         // as: 'getuserToId',
      });

      var arrOfFollower = [];

      getFollower.map((followerId) => {
         arrOfFollower.push(followerId.userFollowId);
      });

      var getPostFromFollower = [req.user.id, ...arrOfFollower];

      const feed = await Post.findAll({
         where: { userId: getPostFromFollower },
         attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
         order: [['createdAt', 'DESC']],
         include: [
            {
               model: User,
               attributes: {
                  exclude: [
                     'createdAt',
                     'updatedAt',
                     'password',
                     'bio',
                     'usernotif',
                  ],
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
               attributes: {
                  exclude: ['idUser'],
               },
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
