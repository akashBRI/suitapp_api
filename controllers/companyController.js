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

module.exports = {
  getAllCompany,
  getLogin
};
