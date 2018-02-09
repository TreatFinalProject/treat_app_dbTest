const path = require("path");
const router = require("express").Router();
const db = require("../models");

const eventFunctions = {
  findAll: function (req, res) {
    db.Event
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
  findById: function (req, res) {
    db.Event
      .findById(req.params.id)
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
router.get("/api/events", eventFunctions.findAll)

router.post("/api/events", eventFunctions.create)

router.delete("/api/events/:id", eventFunctions.remove)

router.get("/api/events/:id", eventFunctions.findById)


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
