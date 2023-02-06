const asyncHandler = require("express-async-handler");
const connection = require('../config/dbConnection');

const getAllCompany = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();
        let SQLprocedurename = "GetCompanyInfo";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {          
                res.status(200).json(result['recordset']);
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

const getLogin = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('CompanyId', req.body.CompanyId);
        request.input('Username', req.body.UserName);
        request.input('Password', req.body.Password);
        request.input('MacID', req.body.MacId);
        let SQLprocedurename = "AppLogin";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                if(result['recordset'].length > 0){
                    const dataset = result['recordset'][0];
                    dataset.Message = "User login successfull";
                    res.status(200).json(dataset);
                } else {
                    res.status(401).json({"Message":"Invalid user credentials..!"});
                }                
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});

const GetEmployeeRoute_DayWise = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('CompanyId', req.body.CompanyId);
        request.input('EmpId', req.body.EmpId);
        request.input('Day', req.body.Day);
        let SQLprocedurename = "GetEmployeeRoute_DayWise";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'][0];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});

const GetEmployee_MultiRoute_DayWise = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('CompanyId', req.body.CompanyId);
        request.input('EmpId', req.body.EmpId);
        request.input('Day', req.body.Day);
        let SQLprocedurename = "GetEmployeeRoute_DayWise";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});

const GetLastBillnoForMobApp = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('CompanyId', req.body.CompanyId);
        request.input('EmpId', req.body.EmpId);
        request.input('Day', req.body.Day);
        let SQLprocedurename = "GetEmployeeRoute_DayWise";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});


const GetAllCustomers_Root_Day_Wise = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('EmpID', req.body.EmpId);
        request.input('CompanyID', req.body.CompanyId);
        request.input('RootID', req.body.RootId);
        request.input('Day', req.body.Day);
        let SQLprocedurename = "GetAllCustomers_Root_Day_Wise";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});

const GetAllCustomers_MultiRoot_Day_Wise = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('EmpID', req.body.EmpId);
        request.input('CompanyID', req.body.CompanyId);
        request.input('RootID', req.body.RootId);
        request.input('Day', req.body.Day);
        let SQLprocedurename = "GetAllCustomers_Root_Day_Wise";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});

const GetAllCustomersWithPagination = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('EmpID', req.body.EmpId);
        request.input('CompanyID', req.body.CompanyId);
        request.input('RootID', req.body.RootId);
        request.input('Day', req.body.Day);
        request.input('pageno', req.body.PageNo);
        let SQLprocedurename = "PaginationForCustomer";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});
const SearchCustomer = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('EmpID', req.body.EmpId);
        request.input('CompanyID', req.body.CompanyId);
        request.input('RootID', req.body.RootId);
        request.input('Day', req.body.Day);
        request.input('Name', req.body.Name);
        let SQLprocedurename = "SearchCustomer";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});
const GetCustomerDetailById = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('companyID', req.body.Companyid);
        request.input('AccountID', req.body.AccountID);
        let SQLprocedurename = "GetCustomerByID";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});
const ManageCustomer = asyncHandler(async (req, res) => {
    try {
        connection.pool1Connect;
        const request = connection.pool1.request();        
        request.input('AccountID', req.body.AccountId);
        request.input('AccountName', req.body.AccountName);
        request.input('Address', req.body.Address);
        request.input('country', req.body.country);
        request.input('mob', req.body.Mob);
        request.input('phone', req.body.Phone);
        request.input('District', req.body.District);
        request.input('State', req.body.State);
        request.input('Pincode', req.body.Pincode);
        request.input('Companyid', req.body.Companyid);
        request.input('isdeleted', 0);
        request.input('CreatedBy', req.body.UserId);
        request.input('CreatedDate', DateTime.Now.ToString("M/d/yyyy"));
        if(req.body.AccountID > 0){
            request.input('ModifiedBy', req.body.UserId);
        }
        else{
            request.input('ModifiedBy', 0);
        }
        request.input('ModifiedDate', DateTime.Now.ToString("M/d/yyyy"));
        request.input('DeletedBy', 0);
        request.input('DeletedDate', DateTime.Now.ToString("M/d/yyyy") );
        request.input('Place', req.body.Place);
        request.input('GSTinNo', req.body.GSTinNo);
        request.input('AdharNo', req.body.AdharNo);
        request.input('Customer_SuitAppsId', req.body.Customer_SuitAppsId);
        request.input('OutCustomer_SuitAppsId', 50);
        
        let SQLprocedurename = "InsertUpdateAccout_App";
        request.execute(SQLprocedurename, function (error, result) {
            if (error) {
                res.status(500).json({
                    status: false,
                    data: error
                })
            } else {            
                const dataset = result['recordset'];
                res.status(200).json(dataset);
            }
        });
    } catch (error) {        
        res.status(500).json(error);
    }
});

module.exports = {
  getAllCompany,
  getLogin,
  GetEmployeeRoute_DayWise,
  GetEmployee_MultiRoute_DayWise,
  GetAllCustomers_Root_Day_Wise,
  GetAllCustomers_MultiRoot_Day_Wise,
  GetAllCustomersWithPagination,SearchCustomer,GetCustomerDetailById,
  ManageCustomer

};
