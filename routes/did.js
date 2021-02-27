const router = require("express").Router();
const didController = require("../controllers/didController");

//read all blogposts and send back in JSON format
router.route("/")
  .get(didController.read);

// router.route("/:id")
//   .get(didlistController.readOne);

router.route("/add")
  .post(didController.create);

module.exports = router;

