// models/Translation.js
const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
  germanWord: String,
  englishTranslations: [String],
});

module.exports = mongoose.model('Translation', translationSchema);
