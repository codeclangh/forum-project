import express from "express";
import dotenv from "dotenv";
import path from "path";

// others
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Routes
import usersRoute from "./routes/user.js";

// Dotenv configuration
dotenv.config();

connectDB();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/users/", usersRoute);

app.get("/", (req, res) => {
	res.send("Server running");
});

//
app.use(notFound);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log("Server running on port " + process.env.PORT);
});
