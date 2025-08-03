import Department from "../models/department.model.js";

// Crear un nuevo departamento
export const createDepartamento = async (req, res) => {
  try {
    const departamento = new Department(req.body);
    await departamento.save();
    res.status(201).json(departamento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los departamentos
export const getDepartamentos = async (req, res) => {
  try {
    const departamentos = await Department.find();
    res.json(departamentos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un departamento por su nombre
export const getDepartamentoPorNombre = async (req, res) => {
  try {
    const { nombre } = req.params;
    const departamento = await Department.findOne({ nombre: nombre });

    if (!departamento) {
      return res.status(404).json({ error: 'Departamento no encontrado por nombre' });
    }

    res.json(departamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un departamento por nombre
export const updateDepartamento = async (req, res) => {
  try {
    // Asumimos que el nombre es único y se usa para encontrar el departamento
    const departamento = await Department.findOneAndUpdate({ nombre: req.params.nombre }, req.body, { new: true });

    if (!departamento) {
      return res.status(404).json({ error: 'Departamento no encontrado' });
    }

    res.json(departamento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un departamento por nombre
export const deleteDepartamento = async (req, res) => {
  try {
    // Asumimos que el nombre es único y se usa para eliminar el departamento
    const departamento = await Department.findOneAndDelete({ nombre: req.params.nombre });

    if (!departamento) {
      return res.status(404).json({ error: 'Departamento no encontrado' });
    }

    res.json({ message: 'Departamento eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
