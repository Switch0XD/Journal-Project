import express from "express";

import cors from "cors";
import publicationRouter from "../src/router/publicationRouter.js";
import contributionRouter from "../src/router/contributionRouter.js";

const app = express();



// app.use(express.json());
app.use(express.json({
  type: ['application/json', 'text/plain']
}))

// Middleware
app.use(cors('*'));


app.use(publicationRouter)
app.use(contributionRouter)

app.get("/", (req, res) => {
  res.send({ message: "hello world!" });
});

app.post("/", (req, res) => {
  console.log("request", req.body);
  res.send({ message: "hello world!" });

});


// app.listen(3000);
export default app;
