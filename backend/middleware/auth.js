import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const protect = async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await User.findById(decoded.user.id).select("-password");

			next();
		} catch (error) {
			res.status(401);
			throw new Error("Unauthorized");
		}
	}
	if (!token) {
		res.status(401);
		throw new Error("Unauthorized");
	}
};

export const admin = (req, res, next) => {
	if (req.user.isAdmin) {
		next();
	} else {
		res.status(404);
		throw new Error("Not found");
	}
};
