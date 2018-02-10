const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/treat",
  {
    // useMongoClient: true
  }
);

const eventSeed = [
  {
    eventName: "Frida's B-day",
    eventHost: "Kelly Quinn",
    location: "Jersey City",
    date: new Date(Date.now())
  
  },
  {
    eventName: "Baby's B-day",
    eventHost: "Kelly Quinn",
    location: "Jersey City",
    date: new Date(Date.now())
  
  }
];

const guestSeed = [
  {
    firstName: "Kelly",
    lastName: "Quinn",
    email: "kellyquinn213@gmail.com",
    RSVP: ""
  }
];

const todoSeed = [
  {
    todoItem: "Send out invites"
  }
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Guest
  .remove({})
  .then(() => db.Guest.collection.insertMany(guestSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Todo
  .remove({})
  .then(() => db.Todo.collection.insertMany(todoSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
