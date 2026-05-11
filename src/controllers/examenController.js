const ExamenModel = require('../models/examenModel');


const createExamen = async (req, res) => {
    try {
        const { paciente, tipo_examen, fecha_examen, costo } = req.body;
        
        
        if (!paciente || !tipo_examen || !fecha_examen || costo === undefined) {
            return res.status(400).json({ error: 'Faltan campos obligatorios: paciente, tipo_examen, fecha_examen o costo.' });
        }
        
        const insertId = await ExamenModel.create(req.body);
        res.status(201).json({ message: 'Examen creado exitosamente', id: insertId });
    } catch (error) {
        res.status(500).json({ error: 'Error interno al crear el examen.', detalle: error.message });
    }
};

 
const getExamenes = async (req, res) => {
    try {
        const examenes = await ExamenModel.getAll();
        res.status(200).json(examenes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros.' });
    }
};


const getExamenById = async (req, res) => {
    try {
        const examen = await ExamenModel.getById(req.params.id);
        if (!examen) {
            return res.status(404).json({ message: 'Examen no encontrado.' });
        }
        res.status(200).json(examen);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el examen.' });
    }
};


const updateExamen = async (req, res) => {
    try {
        const { paciente, tipo_examen, fecha_examen, costo } = req.body;
        
        if (!paciente || !tipo_examen || !fecha_examen || costo === undefined) {
            return res.status(400).json({ error: 'Faltan campos obligatorios para actualizar.' });
        }

        const affectedRows = await ExamenModel.update(req.params.id, req.body);
        
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Examen no encontrado o los datos son idénticos.' });
        }
        res.status(200).json({ message: 'Examen actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el examen.' });
    }
};


const deleteExamen = async (req, res) => {
    try {
        const affectedRows = await ExamenModel.delete(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Examen no encontrado.' });
        }
        res.status(200).json({ message: 'Examen eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el examen.' });
    }
};

module.exports = {
    createExamen,
    getExamenes,
    getExamenById,
    updateExamen,
    deleteExamen
};