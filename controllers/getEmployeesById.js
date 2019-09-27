// const express = require('express');
// const ruter = express.Router();

// const employees = require('../employees.js')

// router.get('/employees/:id')

modeule.export = { getEmployeesById };

const getEmployeesById = (req, res) => {
	// SELCT USERS WHERE IS = <REQ PARAMS ID>;
	let sql = "SELECT * FROM ?? WHERE ?? = ?";
	//WHAT GOES IN THE BRACKETS
	sql = mysql.format(sql, ["employees", "emp_no", req.params.id]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};