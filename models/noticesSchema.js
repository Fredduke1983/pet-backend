const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const handleMongooseError = require("../utils/handleMongooseError");
const { DEFAULT_PET_IMG, DEFAULT_CONTACT_INFO } = require("../constants/constants");

const noticesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    breed: {
      type: String,
    },
    place: {
      type: String,
    },
    imgUrl: {
      type: String,
      default:
        DEFAULT_PET_IMG,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    birthday: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    sex: {
      type: String,
    },
    email: {
      type: String,
      default: DEFAULT_CONTACT_INFO,
    },
    phone: {
      type: String,
      default: DEFAULT_CONTACT_INFO,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

noticesSchema.post("save", handleMongooseError);
const Notice = model("notice", noticesSchema);

module.exports = Notice;

