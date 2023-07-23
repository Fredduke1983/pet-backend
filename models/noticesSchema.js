const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const handleMongooseError = require("../utils/handleMongooseError");

const noticesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/never-leave-your-pet-behind-lettering_23-2148521779.jpg",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "The user did not leave a contact",
    },
    phone: {
      type: String,
      default: "The user did not leave a contact",
    },
    favorite: {
      type: Boolean,
      default: false,
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

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Set username"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, "Set password for user"],
//     },
//     avatar: {
//       type: String,
//     },
//     phone: {
//       type: String,
//     },
//     city: {
//       type: String,
//     },
//     birthday: {
//       type: String,
//     },
//     pets: [petSchema],
//     favorites: [
//       {
//         type: String,
//       },
//     ],
//     token: String,
//   },
//   { versionKey: false }
// );