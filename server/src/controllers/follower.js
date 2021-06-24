const { Follower, User } = require('../../models/');

exports.addFollower = async (req, res) => {
   try {
      const { body } = req;
      console.log('HITTING ADD FOLLOWER');
      const userId = req.user.id;

      const checkUser = await User.findOne({
         where: { id: req.body.userFollowId },
      });

      // check user to follow is exist or not
      if (!checkUser) {
         console.log('true-----------------------');
         return res.send({
            status: 'fail',
            message: "The user you are looking for doesn't Exist ",
         });
      }

      const checkFollower = await Follower.findOne({
         where: [{ userId: userId }, { userFollowId: req.body.userFollowId }],
      });

      if (checkFollower) {
         console.log('hitting checkfollower===========');
         const deletedFollower = await Follower.destroy({
            where: { id: checkFollower.id },
         });
         return res.send({
            status: 'success',
            data: {
               deletedFollower: deletedFollower,
            },
         });
      }

      console.log('hitting addfollower===========');
      const follower = await Follower.create({
         userId: userId,
         userFollowId: req.body.userFollowId,
      });

      res.send({
         status: 'success',
         data: {
            userFollow: follower,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getFollowing = async (req, res) => {
   try {
      const { userid } = req.params;
      console.log('hitting get follower', userid);

      const checkUser = await User.findOne({
         where: { id: userid },
      });

      if (!checkUser) {
         console.log('true-----------------------');
         return res.send({
            status: 'fail',
            message: "The user you are looking for doesn't Exist ",
         });
      }

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
      // console.log('hitting get followers');
      const { userid } = req.params;
      console.log(
         ' \n \n \n \n \n \n \n \n \n \n \n \n \n hitting get follower',
         userid
      );

      const checkUser = await User.findOne({
         where: { id: userid },
      });

      if (!checkUser) {
         return res.send({
            status: 'fail',
            message: "The user you are looking for doesn't Exist ",
         });
      }

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
