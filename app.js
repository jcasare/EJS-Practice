//jshint esversion:6

const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
let items = [];
app.get("/", (req, res) => {
  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  const currentDay = today.toLocaleString("en-US", options);
  res.render("list", { kindOfDay: currentDay, newItems: items });
});
app.post("/api/v1/createActivity", async (req, res) => {
  const newActivity = req.body.activity;
  items.push(newActivity);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}....`);
});
