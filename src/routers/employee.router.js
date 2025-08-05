import express from 'express';
import {
  createEmpleado,
  getEmpleados,
  updateEmpleado,
  deleteEmpleado,
  getEmpleadosByDepartamento
} from '../controllers/employee.controllers.js';

const router = express.Router();


router.post('/', createEmpleado);
router.get('/', getEmpleados);
router.get('/departamento/:codigo', getEmpleadosByDepartamento);
router.put('/:codigo', updateEmpleado);
router.delete('/:codigo', deleteEmpleado);

export default router;
