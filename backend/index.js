import express from "express";
import mongoose from "mongoose";
import allRoutes from "./routes/index.js";
import cors from "cors";
const setupAndStartServer = () => {
  const app = express();
  app.listen("3000", () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //connect mongoose
    mongoose
      .connect("mongodb://localhost:27017")
      .then(() => {
        console.log("hello");
      })
      .catch((err) => {
        console.log(err);
      });
    app.use("/api", allRoutes);
    console.log("started");
  });
};
setupAndStartServer();
