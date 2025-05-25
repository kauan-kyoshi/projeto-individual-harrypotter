const e = require('express');
var quizModel = require('../models/quizModel');

function enviar(req, res) {
    var casa = req.body.casaServer;
    var fantasmaServer = req.body.fantasmaServer;
    var localServer = req.body.localServer;
    var fkcasaServer = req.body.fkcasaServer;
    
    if (casa == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if(fantasmaServer == undefined) {
        res.status(400).send("Seu fantasma está undefined!");
    }else if(localServer == undefined) {
        res.status(400).send("Seu local está undefined!");
    }else{
        quizModel.enviar(casa, fantasmaServer, localServer, fkcasaServer)
        .then(function(resultado) {
            res.json(resultado);
        }).catch(function(erro) {
            console.log(erro);
            console.log("Houve um erro ao cadastrar a casa! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}


function buscarCasa(req, res) {
    var idcasa = req.body.idcasa;
    var fantasma = req.body.fantasma;
    var local = req.body.local;
    
    if (idcasa == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if(fantasma == undefined) {
        res.status(400).send("Seu fantasma está undefined!");
    }else if(local == undefined) {
        res.status(400).send("Seu local está undefined!");
    }else{
        
        quizModel.buscarCasa(idcasa, fantasma, local)
        .then(function(resultado) {
            res.json(resultado);
        }).catch(function(erro) {
            console.log(erro);
            console.log("Houve um erro ao cadastrar a casa! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

}

function atualizarfk(req, res) {

    var fk_casa = req.body.fk_casa;
    var idcasa = req.body.idCasa;
    if (fk_casa == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if(idcasa == undefined) {
        res.status(400).send("Seu idcasa está undefined!");
    }else{
        quizModel.atualizarfk(fk_casa, idcasa)
        .then(function(resultado) {
            res.json(resultado);

        }).catch(function(erro) {
            console.log(erro);
            console.log("Houve um erro ao cadastrar a casa! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }


}



module.exports = {
    enviar,
    atualizarfk,
    buscarCasa
}