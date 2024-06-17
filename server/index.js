import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRouter from "./routes/posts.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/post", postRouter);

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://krtburak:Test1234.@clustersosyal.yolrgji.mongodb.net/socialDB?retryWrites=true&w=majority&appName=ClusterSosyal";
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
