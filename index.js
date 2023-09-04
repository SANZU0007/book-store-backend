import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksroutes from "./routes/booksroutes.js"


const app = express();

// Middleware for parsing request body
app.use(express.json());


app.get("/", (request, response) => {
  console.log(request);
  response.send("<h1>Hello World</h1>");
});

app.use('/books',booksroutes);



mongoose.set("strictQuery", true);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`app is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
