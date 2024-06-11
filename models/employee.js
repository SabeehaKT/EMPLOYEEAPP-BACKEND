const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "id":String,
        "name":String,
        "salary":String
    }
)
 
const employeemodel=mongoose.Model("employees",schema);
module.exports={employeemodel}