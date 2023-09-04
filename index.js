import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  response.send('<h1>Hello World</h1>'); 
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
