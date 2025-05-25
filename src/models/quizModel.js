var database = require("../database/config")

function enviar(casa, fantasma, local,fk_casa) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar(): ", casa, fantasma, local,fk_casa);

    var instrucaoSql = `
        INSERT INTO casa (idcasa, nome, fantasma, local) VALUES
        (default, '${casa}', '${fantasma}', '${local}');
    `;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql) ;
    return database.executar(instrucaoSql);

}


function buscarCasa(idcasa,casa, fantasma, local) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarCasa(): ",idcasa, casa, fantasma, local);

    var instrucaoSql = `
        SELECT * FROM casa;
    `
        ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql) ;
    return database.executar(instrucaoSql);
}


function atualizarfk(fk_casa,idCasa) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarfk(): ", fk_casa,idCasa);

    var instrucaoSql = `
        UPDATE usuario SET fk_casa = ${idCasa} WHERE idUsuario = ${fk_casa};
    `
        ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql) ;
    return database.executar(instrucaoSql);
}





module.exports = {
    enviar,
    buscarCasa,
    atualizarfk
}


