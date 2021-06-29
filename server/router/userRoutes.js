const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { hashPassword, comparePassword } = require('../utils/passManager');
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/ExpressError');
const generateToken = require('../utils/generateToken');
const { protect } = require('../utils/protect');

router.post(
	'/register',
	wrapAsync(async (req, res) => {
		const { password, email, confirmPassword } = req.body;

		const userExist = await User.findOne({ email });
		if (userExist) {
			throw new ExpressError('user already exists', 400);
		}
		if (password !== confirmPassword) {
			throw new ExpressError(`Invalid password`, 401);
		}
		const hasedPassword = await hashPassword(password);
		const user = new User({ email, password: hasedPassword });
		await user.save();
		res.status(200).json({
			message: 'Welcome',
			_id: user._id,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	})
);

router.post(
	'/login',
	wrapAsync(async (req, res) => {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			throw new ExpressError('Invalid email or password', 401);
		}

		const isValid = await comparePassword(password, user.password);

		if (isValid) {
			res.status(200).json({
				_id: user._id,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id)
			});
		} else {
			throw new ExpressError('Invalid email or password', 401);
		}
	})
);

router.get(
	'/profile',
	protect,
	wrapAsync(async (req, res) => {
		const user = await User.findById(req.user._id);
		if (user) {
			res.status(200).json({
				_id: user._id,
				email: user.email,
				isAdmin: user.isAdmin,
				message: 'user is already sign in'
			});
		} else {
			throw new ExpressError('user not found', 404);
		}
	})
);

module.exports = router;
