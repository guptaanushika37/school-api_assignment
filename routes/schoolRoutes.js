const express = require("express");
const router = express.Router();

// 👇 Controller import karo
const {
  addSchool,
  listSchools,
} = require("../controllers/schoolController");

// 👇 Ab controller use karo
router.post("/addSchool", addSchool);
router.get("/listSchools", listSchools);

module.exports = router;