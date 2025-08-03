import mongoose from "mongoose";
import { model, Schema } from "mongoose";
import Department from "./department.model.js";


const employeeSchema = new Schema ({
    name: { type:String},
    dept_code: { type: Schema.Types.ObjectId, ref: "Department" }
})

const EmployeeModel = new model ("Employee", employeeSchema);


export default EmployeeModel