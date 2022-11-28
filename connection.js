async function connect() {
  const dotenv = require("dotenv");

  var sql = require("mssql");

  dotenv.config();

  console.log(process.env.USER);

  var config = {
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    stream: false,
    options: {
      trustedConnection: true,
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  };

  await sql.connect(config);

  return sql;
}

module.exports = { connect };
