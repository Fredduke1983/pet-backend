const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const { array } = require("joi");

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
  avatar: {
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
    },
    phone: {
      type: String,
    },
    city: {
      type: String,
    },
    birthday: {
      type: String,
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
