// controllers/translationController.js
const Translation = require("../models/Translation");

// Create a new translation
exports.createTranslation = async (req, res) => {
  try {
    const { germanWord, englishTranslations } = req.body;
    const translation = new Translation({ germanWord, englishTranslations });
    await translation.save();
    res.status(201).json(translation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create translation" });
  }
};

// Get all translations
exports.getAllTranslations = async (req, res) => {
  try {
    const translations = await Translation.find();
    res.json(translations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch translations" });
  }
};
