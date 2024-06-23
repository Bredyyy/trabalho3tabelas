CREATE TABLE clientes (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    idade INT NOT NULL
);

CREATE TABLE produtos (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    descricao VARCHAR(120) NOT NULL,
    preco DECIMAL(5,0) NOT NULL,
    data_atualizado DATETIME NOT NULL
);

CREATE TABLE usuaios (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    token VARCHAR(10)
);
