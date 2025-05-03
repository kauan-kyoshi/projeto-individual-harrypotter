-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE aQuartaVassoura;

USE aQuartaVassoura;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

INSERT INTO usuario (nome, email, senha) VALUES ('John Doe', 'john.doe@example.com', 'password123');
INSERT INTO usuario (nome, email, senha) VALUES ('Jane Smith', 'jane.smith@example.com', 'password456');