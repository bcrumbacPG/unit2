const connection = require("../connection");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/count", async function (req, res, next) {
  var sql = await connection.connect();

  const result =
    await sql.query`select COUNT(*) as customerCount from customers`;

  res.send(result);
});

router.get("/names", async function (req, res, next) {
  var sql = await connection.connect();

  const result = await sql.query`select ContactName from customers`;

  res.send(result);
});

module.exports = router;
