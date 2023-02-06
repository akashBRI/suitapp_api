const express = require("express");
const { getAllCompany, getLogin, GetEmployeeRoute_DayWise, GetEmployee_MultiRoute_DayWise, GetAllCustomers_Root_Day_Wise, GetAllCustomers_MultiRoot_Day_Wise, GetAllCustomersWithPagination, SearchCustomer, GetCustomerDetailById } = require("../controllers/companyController");
const router = express.Router();

router.get("/GetAllCompanyNames", getAllCompany);
router.post("/Login", getLogin);
router.post("/GetEmployeeRoute_DayWise", GetEmployeeRoute_DayWise);
router.post("/RouteList", GetEmployee_MultiRoute_DayWise);
router.post("/GetAllCustomers_Root_Day_Wise", GetAllCustomers_Root_Day_Wise);
router.post("/GetAllCustomers_MultiRoot_Day_Wise", GetAllCustomers_MultiRoot_Day_Wise);
router.post("/GetAllCustomersWithPagination", GetAllCustomersWithPagination);
router.post("/SearchCustomer", SearchCustomer);
router.post("/GetCustomerDetailById", GetCustomerDetailById);
module.exports = router;