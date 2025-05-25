
CREATE DATABASE aQuartaVassoura;

USE aQuartaVassoura;


CREATE TABLE casa (
    idcasa INT primary key NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    fantasma VARCHAR(45) NOT NULL,
    local VARCHAR(45) NOT NULL
);


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) not null,
	email VARCHAR(50) not null,
	senha VARCHAR(50) not null,
    fkcasa int,
    constraint fk_casa_usuario foreign key (fkcasa) references casa(idcasa)
);



    var instrucaoSql2 = `update usuario set fkcasa = (SELECT idcasa from casa where nome = '${casa}') where 
        idUsuario = ${fk_casa};`
