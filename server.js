const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
const translationRoutes = require("./routes/translationRoutes");
app.use("/translations", translationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
