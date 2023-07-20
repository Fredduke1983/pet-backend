const { Schema, model } = require("mongoose");
const handleMongooseError = require("../utils/handleMongooseError");

const noticesSchema = new Schema(
  {
    name: String,
    place: String,
    birthday: String,
    type: String,
    sex: String,
    avatar: String,
    favorite: {
      type: Boolean,
      default: false
    }
  },


  { versionKey: false }
);

// petSchema.post("save", handleMongooseError);
const Notice = model("pet", noticesSchema);

module.exports = Notice;
