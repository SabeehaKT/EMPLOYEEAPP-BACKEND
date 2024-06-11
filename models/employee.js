const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "id":String,
        "name":String,
        "salary":String
    }
)
 
const employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}