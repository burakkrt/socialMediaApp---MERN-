import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import postRouter from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/post", postRouter);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connected, port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Database not connected, Error : ${err}`);
  });
