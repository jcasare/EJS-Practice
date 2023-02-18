//jshint esversion:6

const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const currentDay = today.getDay();
  res.render("list", { kindOfDay: daysOfWeek[currentDay] });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}....`);
});
