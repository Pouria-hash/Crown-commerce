const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

userSchema.methods.comparePassword = async function(enterPassword) {
	return await bcrypt.compare(enterPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
