// routes/translationRoutes.js
const express = require("express");
const router = express.Router();
const translationController = require("../controllers/translationController");

// Create a new translation
router.post("/", translationController.createTranslation);

// Get all translations
router.get("/", translationController.getAllTranslations);

module.exports = router;
