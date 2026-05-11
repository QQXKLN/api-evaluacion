const ActivoModel = require('../models/activoModel');

const createActivo = async (req, res) => {
    try {
        const { codigo_activo, nombre_equipo, valor_compra } = req.body;
        
        
        if (!codigo_activo || !nombre_equipo || valor_compra === undefined) {
            return res.status(400).json({ error: 'Faltan campos obligatorios: codigo_activo, nombre_equipo o valor_compra.' });
        }
        
        const insertId = await ActivoModel.create(req.body);
        res.status(201).json({ message: 'Activo creado exitosamente', id: insertId });
    } catch (error) {
        res.status(500).json({ error: 'Error interno al crear el activo.', detalle: error.message });
    }
};

const getActivos = async (req, res) => {
    try {
        const activos = await ActivoModel.getAll();
        res.status(200).json(activos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los activos.' });
    }
};

const getActivoById = async (req, res) => {
    try {
        const activo = await ActivoModel.getById(req.params.id);
        if (!activo) {
            return res.status(404).json({ message: 'Activo no encontrado.' });
        }
        res.status(200).json(activo);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el activo.' });
    }
};

const updateActivo = async (req, res) => {
    try {
        const { codigo_activo, nombre_equipo, valor_compra } = req.body;
        
        if (!codigo_activo || !nombre_equipo || valor_compra === undefined) {
            return res.status(400).json({ error: 'Faltan campos obligatorios para actualizar.' });
        }

        const affectedRows = await ActivoModel.update(req.params.id, req.body);
        
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Activo no encontrado o los datos son idénticos.' });
        }
        res.status(200).json({ message: 'Activo actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el activo.' });
    }
};

const deleteActivo = async (req, res) => {
    try {
        const affectedRows = await ActivoModel.delete(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Activo no encontrado.' });
        }
        res.status(200).json({ message: 'Activo eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el activo.' });
    }
};

module.exports = {
    createActivo,
    getActivos,
    getActivoById,
    updateActivo,
    deleteActivo
};