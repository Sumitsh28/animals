const mongoose = require("mongoose");

const animalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add animal name"],
    },
    type: {
      type: String,
      required: [true, "Please add animal type"],
    },
    origin: {
      type: String,
      required: [true, "Please add animal origin"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Animal", animalSchema);
