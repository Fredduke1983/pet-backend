const { Schema, model } = require("mongoose");
// const { handleMongooseError } = require("../utils/handleMongooseError");
// const Joi = require("joi");

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
    token: String,
  },
  { versionKey: false }
);

// userSchema.post("save", handleMongooseError);

// const registrationSchema = Joi.object({
//   password: Joi.string().required(),
//   email: Joi.string().required(),
//   subscription: Joi.string(),
// });

// const loginSchema = Joi.object({
//   password: Joi.string().required(),
//   email: Joi.string().required(),
// });

// const schemas = {
//   registrationSchema,
//   loginSchema,
// };

const User = model("user", userSchema);

module.exports = {
  User,
  // schemas,
};
