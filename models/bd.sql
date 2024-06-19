CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NOT,
    email VARCHAR(50) NOT NOT,
    idade INT NOT NULL
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(200) NOT NOT,
    prico DECIMAL(10, 2) NOT NULL,
    data_atualizado DATETIME NOT NULL
);

CREATE TABLE usuaios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(30) NOT NULL,
    senha VARCHAR(12) NOT NULL,
    token VARCHAR(30)
);
