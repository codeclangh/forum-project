import mongoose from "mongoose";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

// @route /api/users/
// @Desc register user
// @Access: Public
export const registerUser = asyncHandler(async (req, res) => {
	try {
		const { name, username, password, email, phone } = req.body;
		const userExists = await User.findOne({
			$or: [{ username: username }, { email: email }],
		});
		if (userExists) {
			res.status(400);
			throw new Error("User exists");
		}
		const user = await User.create({
			name,
			username,
			password,
			email,
			phone,
		});
		const payload = {
			user: {
				id: user._id,
			},
		};
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			username: user.username,
			isAdmin: user.isAdmin,
			token: generateToken(payload),
		});
	} catch (error) {
		throw new Error(error.message);
	}
});

// @route /api/users/log in
// @Desc Login user
// @Access: Public
export const loginUser = asyncHandler(async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username: username });
		if (user && (await user.matchPassword(password, user.password))) {
			const payload = {
				user: {
					id: user._id,
				},
			};
			res.status(200).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				phone: user.phone,
				username: user.username,
				isAdmin: user.isAdmin,
				token: generateToken(payload),
			});
		} else {
			throw new Error("Invalid Username or Password ");
		}
	} catch (error) {
		throw new Error(error.message);
	}
});
