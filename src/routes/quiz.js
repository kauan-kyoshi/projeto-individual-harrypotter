var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/enviar", function (req, res) {

    quizController.enviar(req, res);

});


router.get("/buscarCasa", function (req, res) {
    
    quizController.buscarCasa(req, res);
    
});


router.put("/atualizarfk", function (req, res) {
    quizController.atualizarfk(req, res);

});


module.exports = router;