import Department from "../models/department.model.js";
import Employee from "../models/employee.model.js";

// Crear un nuevo empleado
export const createEmpleado = async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los empleados
export const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un empleado por nombre
export const getEmpleadoPorNombre = async (req, res) => {
  try {
    // El nombre del empleado se obtiene de los parámetros de la URL
    const { nombre } = req.params;
    // Buscamos un empleado en la base de datos que coincida con el nombre
    const empleado = await Empleado.findOne({ nombre: nombre });

    // Si no se encuentra el empleado, respondemos con un error 404
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado por nombre' });
    }

    // Si se encuentra, respondemos con los datos del empleado
    res.json(empleado);
  } catch (error) {
    // Manejamos cualquier error del servidor o de la base de datos
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un empleado por código
export const updateEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findOneAndUpdate({ codigo: req.params.codigo }, req.body, { new: true });
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
    const empleado = await Empleado.findOneAndDelete({ codigo: req.params.codigo });
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
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