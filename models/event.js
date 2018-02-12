const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  eventHost: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: {type: String, required: true},
  email: String
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
