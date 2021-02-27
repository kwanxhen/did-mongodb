const Did = require("../models/didModel");

//CRUD
module.exports = {
  create: function (req, res) {
    Did.create(req.body)
      .then((newDid) => res.json(newDid))
      .catch((err) => res.status(422).json(err));
  },
  readOne: function (req, res) {
    //req.params gives you the blogpost id here
    Did.findById(req.params);
  },
  read: function (req, res) {
    Did.find()
      .then((allDids) => res.json(allDids))
      .catch((err) => res.status(422).json(err));
  },
};