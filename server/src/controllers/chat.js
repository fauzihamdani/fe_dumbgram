const { Chat, User } = require('../../models/');

exports.insertChat = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);
      const idUser = req.user.id;
      const { iduserto } = req.params;

      const chat = await Chat.create({
         userFromId: idUser,
         userToId: iduserto,
         message: req.body.message,
      });

      const getChatSent = await Chat.findOne({
         where: { id: chat.id },
         include: {
            model: User,
            attributes: {
               exclude: [
                  'password',
                  'createdAt',
                  'updatedAt',
                  'usernotif',
                  'bio',
               ],
            },
            as: 'userTo',
         },
         attributes: { exclude: ['userId', 'id', 'createdAt', 'updatedAt'] },
      });

      res.send({
         status: 'success',
         data: {
            Message: getChatSent,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getChat = async (req, res) => {
   try {
      const { usertoid } = req.params;
      console.log('usertoid', usertoid);
      console.log('hitting get follower', req.user.id);

      const chats = await Chat.findAll({
         where: {
            userFromId: req.user.id,
            userToId: usertoid,
         },
         attributes: {
            exclude: ['createdAt', 'updatedAt', 'userFromId', 'userToId'],
         },
         include: {
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
            as: 'userFrom',
         },
      });

      res.send({
         status: 'success',
         data: {
            message: chats,
         },
      });
   } catch (error) {}
};
