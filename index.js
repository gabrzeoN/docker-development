import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.listen(5000, () => {
  console.log("Running on port 5000");
});