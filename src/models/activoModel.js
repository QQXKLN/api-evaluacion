const db = require('../config/db');

const ActivoModel = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM activos_tecnologia');
        return rows;
    },
    
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM activos_tecnologia WHERE id = ?', [id]);
        return rows[0];
    },
    
    create: async (data) => {
        const { codigo_activo, nombre_equipo, marca, fecha_compra, valor_compra, garantia_meses, en_uso } = data;
        const [result] = await db.query(
            'INSERT INTO activos_tecnologia (codigo_activo, nombre_equipo, marca, fecha_compra, valor_compra, garantia_meses, en_uso) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [codigo_activo, nombre_equipo, marca, fecha_compra, valor_compra, garantia_meses, en_uso]
        );
        return result.insertId;
    },
    
    update: async (id, data) => {
        const { codigo_activo, nombre_equipo, marca, fecha_compra, valor_compra, garantia_meses, en_uso } = data;
        const [result] = await db.query(
            'UPDATE activos_tecnologia SET codigo_activo=?, nombre_equipo=?, marca=?, fecha_compra=?, valor_compra=?, garantia_meses=?, en_uso=? WHERE id=?',
            [codigo_activo, nombre_equipo, marca, fecha_compra, valor_compra, garantia_meses, en_uso, id]
        );
        return result.affectedRows;
    },
    
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM activos_tecnologia WHERE id = ?', [id]);
        return result.affectedRows;
    }
};

module.exports = ActivoModel;