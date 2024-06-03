require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
const searchRoutes = require("./routes/searches");
const mongoose = require("mongoose");

app = express();
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method, req.query);

  next();
});

app.use("/", userRoutes);
app.use("/", searchRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {})
  .catch((error) => {
    console.error(error);
  });

app.listen(process.env.PORT, () => {
  console.log("MONGO LOGGED IN & Listening to Port:", process.env.PORT);
});
