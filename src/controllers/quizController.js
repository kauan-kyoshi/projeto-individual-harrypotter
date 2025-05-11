var quizModel = require('../models/quizModel');

function enviar(req, res) {
    var casa = req.body.casaServer;
    var fkServer = req.body.fkServer;
    var fantasmaServer = req.body.fantasmaServer;
    var localServer = req.body.localServer;
    
    if (casa == undefined) {
        res.status(400).send("Sua casa está undefined!");
    }else if(fkServer == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if(fantasmaServer == undefined) {
        res.status(400).send("Seu fantasma está undefined!");
    }else if(localServer == undefined) {
        res.status(400).send("Seu local está undefined!");
    }else{
        quizModel.enviar(casa, fkServer, fantasmaServer, localServer)
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
    enviar

}