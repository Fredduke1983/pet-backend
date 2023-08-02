const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const { DEFAULT_USER_IMG, DEFAULT_PET_IMG } = require("../constants/constants");

const petSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter name"],
  },
  birthday: {
    type: String,
    default: "No info"
  },
  type: {
    type: String,
    required: [true, "Enter type"],
  },
  imgUrl: {
    type: String,
    default: DEFAULT_PET_IMG,
  },
  comments: {
    type: String,
    required: [true, "Enter some comment"],
  },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set username"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    avatar: {
      type: String,
      default: DEFAULT_USER_IMG,
    },
    phone: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    pets: [petSchema],
    favorites: [
      {
        type: String,
      },
    ],

    token: String,
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);
const User = model("user", userSchema);

module.exports = {
  User,
};
