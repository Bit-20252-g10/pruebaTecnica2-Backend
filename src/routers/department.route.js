import Router from "express";
import { createDepartamento, getDepartamentos, getDepartamentoPorNombre, updateDepartamento, deleteDepartamento,
} from "../controllers/department.controller.js";

const router = Router();

// Ruta para obtener todos los departamentos
router.get("/", getDepartamentos);
// Ruta para crear un nuevo departamento
router.post("/", createDepartamento);
// Ruta para obtener un departamento por su nombre
router.get("/:nombre", getDepartamentoPorNombre);
// Ruta para actualizar un departamento por su nombre
router.put("/:nombre", updateDepartamento);
// Ruta para eliminar un departamento por su nombre
router.delete("/:nombre", deleteDepartamento);

export default router;

