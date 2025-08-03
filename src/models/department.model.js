import mongoose from "mongoose";
import { model, Schema } from "mongoose"


const deptSchema = new Schema ({
    name: {type: String, required: true},
    code: {type: Number, required: true, unique: true}
})

const DepartmentModel = mongoose.model("Department", deptSchema);

export default DepartmentModel;