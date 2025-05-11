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
	nome VARCHAR(50) not null,
	email VARCHAR(50) not null,
	senha VARCHAR(50) not null
);

CREATE TABLE casa (
    idcasa INT NOT NULL AUTO_INCREMENT,
    fkUsuario INT,
    nome VARCHAR(45) NOT NULL,
    fantasma VARCHAR(45) NOT NULL,
    local VARCHAR(45) NOT NULL,
    PRIMARY KEY (idcasa),
    CONSTRAINT fk_casa_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

