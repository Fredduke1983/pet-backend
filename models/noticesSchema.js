const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const handleMongooseError = require("../utils/handleMongooseError");
const {
  DEFAULT_PET_IMG,
  DEFAULT_CONTACT_INFO,
} = require("../constants/constants");

const noticesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name"],
    },
    breed: {
      type: String,
    },
    location: {
      type: String,
      required: [true, "Enter location"],
    },
    imgUrl: {
      type: String,
      default: DEFAULT_PET_IMG,
    },
    title: {
      type: String,
      required: [true, "Enter some title"],
    },
    comments: {
      type: String,
      required: [true, "Enter some comment"],
    },
    birthday: {
      type: String,
      default: "No info",
    },
    category: {
      type: String,
      required: [true, "Select category"],
    },
    type: {
      type: String,
      required: [true, "Enter type"],
    },
    price: {
      type: Number,
      default: 0,
    },
    sex: {
      type: String,
      required: [true, "Select sex"],
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
