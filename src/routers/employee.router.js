import express from 'express';
import {
  createEmpleado,
  getEmpleados,
  updateEmpleado,
  deleteEmpleado
} from '../controllers/employee.controllers.js';

const router = express.Router();

router.post('/', createEmpleado);
router.get('/', getEmpleados);
router.put('/:codigo', updateEmpleado);
router.delete('/:codigo', deleteEmpleado);

export default router;
