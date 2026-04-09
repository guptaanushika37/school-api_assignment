require("dotenv").config();
const express = require("express");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

// 👇 IMPORTANT (DB connect trigger karega)
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", schoolRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});