const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./src/config/db'); 
const examenRoutes = require('./src/routes/examenRoutes'); 
const activoRoutes = require('./src/routes/activoRoutes');

const app = express();

app.use(cors());
app.use(express.json()); 


db.query('SELECT 1')
    .then(() => console.log('✅ Conectado exitosamente a la base de datos MySQL'))
    .catch(err => console.error('❌ Error conectando a la base de datos:', err.message));


app.use('/api/examenes', examenRoutes);
app.use('/api/activos', activoRoutes);


app.use((req, res) => {
    res.status(404).json({ 
        error: "Ruta no encontrada en el servidor", 
        url_solicitada: req.originalUrl, 
        metodo_usado: req.method 
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});