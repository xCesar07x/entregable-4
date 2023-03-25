const { Router } = require('express');
const { createUser, getAllUsers } = require('../controllers/user.controllers');

const router = Router();

router.get('/api/v1/users', getAllUsers)

router.post('/api/v1/user', createUser );

module.exports = router;