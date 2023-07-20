const { Schema, model } = require("mongoose");
const handleMongooseError = require("../utils/handleMongooseError");

const petSchema = new Schema(
  {
    name: String,
    place: String,
    birthday: String,
    type: String,
    sex: String,
    avatar: String,
  },

  { versionKey: false }
);

// petSchema.post("save", handleMongooseError);
const Pet = model("pet", petSchema);

module.exports = Pet;
