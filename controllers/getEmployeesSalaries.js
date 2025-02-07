const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");

const getEmployeesSalaries = (req, res) => {
  // SELECT ALL USERS
  let sql = "SELECT ?? FROM ?? where ?? = ?"
  sql = mysql.format(sql, ["salary", "salaries", "emp_no", req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getEmployeesSalaries };
