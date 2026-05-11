CREATE DATABASE if not exists api_evaluacion;
USE api_evaluacion;

-- Tabla 1: examenes_medicos
CREATE TABLE examenes_medicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente VARCHAR(140) NOT NULL,
    tipo_examen VARCHAR(100) NOT NULL,
    fecha_examen DATE NOT NULL,
    resultado_texto TEXT,
    laboratorio VARCHAR(120),
    costo DECIMAL(10,2) NOT NULL,
    entregado BOOLEAN DEFAULT FALSE
);

-- Tabla 2: activos_tecnologia
CREATE TABLE activos_tecnologia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo_activo VARCHAR(40) NOT NULL,
    nombre_equipo VARCHAR(140) NOT NULL,
    marca VARCHAR(80),
    fecha_compra DATE,
    valor_compra DECIMAL(12,2) NOT NULL,
    garantia_meses INT DEFAULT 0,
    en_uso BOOLEAN DEFAULT TRUE
);
