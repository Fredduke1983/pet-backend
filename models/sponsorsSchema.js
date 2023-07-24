const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const sponsorsSchema = new Schema(
  {
    title: String,
    url: String,
    addressUrl: String,
    imageUrl: String,
    workDays: [{ type: Object }],
    phone: String,
    email: String,
  },
  { versionKey: false }
);

sponsorsSchema.post("save", handleMongooseError);
const News = model("sponsor", sponsorsSchema);

module.exports = News;
