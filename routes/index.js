var express = require("express");
var router = express.Router();
const connection = require("../connection");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    var sql = await connection.connect();
  } catch (error) {
    res.status("error", { error });
  }

  res.render("index", { title: "Express" });
});

module.exports = router;
