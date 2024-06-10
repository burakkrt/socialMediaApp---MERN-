import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 4000;

// json veri göndeririken veriyi pars eder
app.use(bodyParser.json());

//form urlencoded ile veri göndermek için veriyi pars eder.
// en fazla 30mb lık veri, extended ile şifrelenmiş urller üzerinde de bodyparser kullanmak için.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected database.");
    });
  })
  .catch((err) => {
    console.log(err);
  });
