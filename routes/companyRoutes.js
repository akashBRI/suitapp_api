const express = require("express");
const { getAllCompany, getLogin } = require("../controllers/companyController");
const router = express.Router();

router.get("/GetAllCompanyNames", getAllCompany);
router.post("/Login", getLogin);

module.exports = router;