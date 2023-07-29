const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const { DEFAULT_USER_IMG } = require("../constants/constants");

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
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
