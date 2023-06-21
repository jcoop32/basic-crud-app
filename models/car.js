const mongoose = require('mongoose');

const currentYear = new Date().getFullYear() + 1;

const carSchema = new mongoose.Schema(
  {
    make: { type: String, required: true },
    model: String,
    releaseYear: {
      type: Number,
      min: 1886,
      max: currentYear,
    },
    color: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Car', carSchema);
