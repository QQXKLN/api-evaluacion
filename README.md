API REST - Evaluación Node.js + Express + SQL

Para ejecutar este proyecto, necesitas tener instalado:
- [Node.js](https://nodejs.org/) (v14 o superior)
- [MySQL](https://www.mysql.com/) (Servidor local o remoto)

Instrucciones de Instalación y Ejecución

1. Clonar el repositorio y acceder a la carpeta:
git clone <URL_DE_TU_REPOSITORIO>
cd api-evaluacion
2. Instalar las dependencias:

npm install

3. Configurar la Base de Datos:

Abrir MySQL (ej. MySQL Workbench)
Ejecuta el código SQL que se encuentra en el archivo database.sql en la raíz de este proyecto para crear la base de datos y las dos tablas correspondientes.

4. Variables de Entorno:
   En el archivo ".env" ajustar los valores para conectar con tu base de datos local:

Fragmento de código
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña_aqui
DB_NAME=api-evaluacion

5. Iniciar el Servidor:
Ejecuta el siguiente comando para levantar la API en modo de desarrollo:


npm run dev
Verás un mensaje indicando que el servidor corre en el puerto 3000 y que la base de datos está conectada.
