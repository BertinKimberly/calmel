import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connection } from "./database/mongo.js";
import bodyParser from "body-parser";
import { userRouter } from "./routes/userRoutes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/auth", userRouter);
app.use("/api", userRouter);

connection;
app.listen(port, () => console.log(`server is running on port ${port}`));
