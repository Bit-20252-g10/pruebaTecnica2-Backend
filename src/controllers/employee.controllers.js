// src/controllers/employee.controllers.js
import Department from "../models/department.model.js";
import Employee from "../models/employee.model.js";

// Crear un nuevo empleado
export const createEmpleado = async (req, res) => {
  try {
    const empleado = new Employee(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los empleados
export const getEmpleados = async (req, res) => {
  try {
    const empleados = await Employee.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un empleado por nombre
export const getEmpleadoPorNombre = async (req, res) => {
  try {
    const { nombre } = req.params;
    const empleado = await Employee.findOne({ nombre: nombre });

    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado por nombre' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener empleados por dep artamento
export const getEmpleadosByDepartamento = async (req, res) => {
  try {
    const codigoDepartamento = parseInt(req.params.codigo);

    if (isNaN(codigoDepartamento)) {
      return res.status(400).json({ message: 'El código de departamento no es válido.' });
    }

    const empleados = await Employee.find({ codigo_departamento: codigoDepartamento });

    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un empleado por código
export const updateEmpleado = async (req, res) => {
  try {
    const empleado = await Employee.findOneAndUpdate({ codigo: req.params.codigo }, req.body, { new: true });
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un empleado por código
export const deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Employee.findOneAndDelete({ codigo: req.params.codigo });
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Esta función parece ser un duplicado, pero la mantengo como la tenías.
export const obtenerEmpleadoPorNombre = async (req, res) => {
  try {
    const { name } = req.params;
    const empleado = await Employee.findOne({ name: name });
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado por nombre' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};