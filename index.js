import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import booksroutes from "./routes/booksroutes.js"

const app = express();
app.use(cors());

// Middleware for parsing request body
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  response.send("<h1>Hello World</h1>");
});

app.use('/books', booksroutes);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MongoDBURL) // Use the environment variable
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT||8004, () => { // Use the environment variable
      console.log(`app is running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
