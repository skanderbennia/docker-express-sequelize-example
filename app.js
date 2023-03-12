import dotenv from "dotenv";
dotenv.config();
import express from "express";
import db from "./models/index.js";
const app = express();
app.use(express.json());

const port = process.env.EXPRESS_PORT || 5000;
app.get("/", async (req, res) => {
  const persons = await db.Person.findAll();
  res.send(persons);
});
app.post("/", async (req, res) => {
  const { username } = req.body;
  const person = await db.Person.create({ username });
  res.send(person);
});
db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
app.listen(port, () => {
  console.log(`this server is listening on port ${port}`);
});
