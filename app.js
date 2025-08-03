import "dotenv/config";
import express from "express";
import databaseConnection from "./src/config/db.js";
import departmentRouter from "./src/routers/department.route.js";
import employeeRouter from "./src/routers/employee.router.js";
const app = express();
const PORT = process.env.PORT || 4000;


databaseConnection();
app.use(express.json());


app.use('/departments',departmentRouter);
app.use('/employees',employeeRouter);
app.listen(PORT, ()=>{
    console.log("Servidor en funcionamiento en el puerto", PORT);
})