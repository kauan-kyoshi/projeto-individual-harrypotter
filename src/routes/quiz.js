var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/enviar", function (req, res) {

    quizController.enviar(req, res);

});

module.exports = router;