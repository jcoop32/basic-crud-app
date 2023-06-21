const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    make: { type: String, required: true },
    model: String,
    // year: {
    //   type: Number,
    //   // min: 1886,
    //   // max: {
    //   //   function() {
    //   //     return new Date().getFullYear() + 1;
    //   //   },
    //   // },
    // },
    color: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Car', carSchema);
