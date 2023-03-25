const { Router } = require('express');
const { createChat, groupChat, deleteChat, getChatUser, getAllChat } = require('../controllers/chat.controllers');


const router = Router();

router.get('/ap1/v1/chat/:id/user', getChatUser);

router.get('/api/v1/participanst/:chatId/message', getAllChat)

router.post('/api/v1/chat/', createChat);

router.post('/api/v1/chat/group', groupChat);

router.delete('/api/v1/chat/:id', deleteChat);

module.exports = router;