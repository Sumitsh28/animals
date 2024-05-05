const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3001;
const animalRoute = require("./routes/animalRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();

app.use(express.json());
app.use("/api/animals", animalRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
