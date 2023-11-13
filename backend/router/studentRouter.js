const express = require("express");
const {
  checkConnection,
  addData
} = require("../controller/studentController");

const router = express.Router();

router.route("/connection").get(checkConnection);
router.route("/add").post(addData);

module.exports = router;
