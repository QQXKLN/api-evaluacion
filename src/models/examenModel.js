const db = require('../config/db');

const ExamenModel = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM examenes_medicos');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM examenes_medicos WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (data) => {
        const { paciente, tipo_examen, fecha_examen, resultado_texto, laboratorio, costo, entregado } = data;
      
        const [result] = await db.query(
            'INSERT INTO examenes_medicos (paciente, tipo_examen, fecha_examen, resultado_texto, laboratorio, costo, entregado) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [paciente, tipo_examen, fecha_examen, resultado_texto || null, laboratorio || null, costo, entregado ? 1 : 0]
        );
        return result.insertId;
    },
    update: async (id, data) => {
        const { paciente, tipo_examen, fecha_examen, resultado_texto, laboratorio, costo, entregado } = data;
        
        const [result] = await db.query(
            'UPDATE examenes_medicos SET paciente=?, tipo_examen=?, fecha_examen=?, resultado_texto=?, laboratorio=?, costo=?, entregado=? WHERE id=?',
            [
                paciente, 
                tipo_examen, 
                fecha_examen, 
                resultado_texto || null, 
                laboratorio || null, 
                costo, 
                entregado ? 1 : 0,
                id
            ]
        );
        return result.affectedRows;
    },
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM examenes_medicos WHERE id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = ExamenModel;