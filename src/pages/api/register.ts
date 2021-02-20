import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongo";
import User from "../../models/User";
import { setTokenCookie } from "../../utils/auth-cookie";
import { generateAccessToken, generateRefreshToken } from "../../utils/token";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        password,
        remember,
        phone,
        username,
        department,
      } = req.body;
      await dbConnect();

      const userExists = await User.findOne({
        $or: [{ username: username }, { email: email }],
      });

      if (!userExists) {
        const user = new User({
          name,
          username,
          password,
          email,
          phone,
          department,
        });

        user.save();

        const accessToken = generateAccessToken({ sub: user._id });
        const refreshToken = generateRefreshToken({ sub: user._id });

        if (remember) {
          setTokenCookie(res, refreshToken);
          res.json({ accessToken });
        } else {
          res.json({ accessToken, refreshToken });
        }
      } else {
        res.status(403).json("User already exists");
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).end("Something went wrong");
    }
  }
};
