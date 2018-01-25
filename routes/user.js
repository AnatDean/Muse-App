const express = require('express');
const {sendUserProfile} = require('../controllers/user');

const userRouter = express.Router();

userRouter.route('/profile')
	.get(sendUserProfile);

	
module.exports = {userRouter};
