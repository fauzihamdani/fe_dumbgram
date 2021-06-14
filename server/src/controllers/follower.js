const { Follower, User } = require('../../models/');

exports.addFollower = async (req, res) => {
   try {
      console.log('user id', req.user.id);
      const { body } = req;
      console.log('response body', body);
      const idUser = req.user.id;

      const follower = await Follower.create({
         userId: idUser,
         userFollowId: req.body.userFollowId,
      });

      res.send({
         status: 'success',
         //  data: {
         //     userFollow: userFollow,
         //  },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getFollowing = async (req, res) => {
   try {
      const { userid } = req.params;
      console.log('hitting get follower', userid);
      const following = await Follower.findAll({
         where: {
            userId: userid,
         },
         atributes: ['id'],
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
            as: 'userFollow',
         },
      });

      res.send({
         status: 'success',
         data: {
            following: following,
         },
      });
   } catch (error) {}
};

exports.getFollower = async (req, res) => {
   try {
      const { userid } = req.params;
      console.log('hitting get follower', userid);
      const followers = await Follower.findAll({
         where: {
            userFollowId: userid,
         },
         atributes: ['id'],
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
            followers: followers,
         },
      });
   } catch (error) {}
};
