const path = require("path");
const router = require("express").Router();
const db = require("../models");

// EVENT FUNCTIONS
const eventFunctions = {
  findByUser: function (req, res) {
    db.Event
      .find(req.params.user)
      .where("email").equals(req.params.email)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  findById: function (req, res) {
    db.Event
      .findById(req.params.id)
      // .where("id").equals(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  create: function (req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  remove: function (req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

// TODO FUNCTIONS
const todoFunctions = {
  findAll: function (req, res) {
    db.Todo
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  findById: function (req, res) {
    db.Todo
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  create: function (req, res) {
    db.Todo
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  remove: function (req, res) {
    db.Todo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

// GUEST FUNCTIONS
const guestFunctions = {
  findAll: function (req, res) {
    db.Guest
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  findById: function (req, res) {
    db.Guest
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  create: function (req, res) {
    db.Guest
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  remove: function (req, res) {
    db.Guest
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

// EVENT ROUTES
router.get("/api/events/:email", eventFunctions.findByUser)
 
router.post("/api/events", eventFunctions.create)

router.delete("/api/events/:id", eventFunctions.remove)

router.get("/api/events/:id", eventFunctions.findById)

//TODO ROUTES
router.get("/api/todo", todoFunctions.findAll)

router.post("/api/todo", todoFunctions.create)

router.delete("/api/todo/:id", todoFunctions.remove)

router.get("/api/todo/:id", todoFunctions.findById)

//GUEST ROUTES
router.get("/api/guests", guestFunctions.findAll)

router.post("/api/guests", guestFunctions.create)

router.delete("/api/guests/:id", guestFunctions.remove)

router.get("/api/guests/:id", guestFunctions.findById)


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
