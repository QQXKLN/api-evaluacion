const express = require('express');
const cors = require('cors');
const db = require('./src/config/db'); 
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


db.getConnection()
    .then(connection => {
        console.log('✅ Conectado exitosamente a la base de datos MySQL');
        connection.release();
    })
    .catch(err => {
        console.error('❌ Error conectando a la base de datos:', err.message);
    });


app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});