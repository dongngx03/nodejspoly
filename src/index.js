import express from "express";
import dotenv from "dotenv"
import { connect } from "mongoose";
import route from "./routes/index.js";


dotenv.config()
const app = express();
connect(process.env.url)
  .then(() => {
    console.log("Connect DB success");
  })
  .catch((err) => {
    console.log("Connect DB failed!", err);
  });

  app.use(express.urlencoded({
    extended:true
  }));
app.use(express.json());

app.use('/v1/api', route)


app.listen(process.env.port, () => {
    console.log(`server is running on port ${process.env.port}`);
})