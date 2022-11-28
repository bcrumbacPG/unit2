async function connect() {
  var sql = require("mssql");

  var config = {
    user: "sa",
    password: "New0Password1",
    server: "localhost",
    database: "Northwind",
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
