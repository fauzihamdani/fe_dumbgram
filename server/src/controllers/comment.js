const { Comment, User } = require('../../models/');

exports.addComment = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body===================================', body);
      const idUser = req.user.id;

      const comment = await Comment.create({
         comment: req.body.comment,
         userId: idUser,
         postId: req.body.postId,
      });

      const commentWithUser = await Comment.findOne({
         where: { id: comment.id },
         include: {
            model: User,
            attributes: {
               exclude: ['password', 'createdAt', 'updatedAt', 'usernotif'],
            },
            as: 'user',
         },
         attributes: { exclude: ['userId', 'id', 'createdAt', 'updatedAt'] },
      });

      res.send({
         status: 'success',
         data: {
            comment: commentWithUser,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getComment = async (req, res) => {
   const { feedid } = req.params;
   try {
      const comment = await Comment.findAll({
         where: { postId: feedid },
         attributes: {
            exclude: ['userId', 'postId', 'createdAt', 'updatedAt', 'PostId'],
         },
         include: [
            {
               model: User,
               attributes: {
                  exclude: [
                     'createdAt',
                     'updatedAt',
                     'password',
                     'email',
                     'bio',
                     'usernotif',
                  ],
               },
               as: 'user',
            },
         ],
      });

      res.send({
         status: 'success',
         data: {
            comments: comment,
         },
      });
   } catch (error) {
      console.log(error);
   }
};
