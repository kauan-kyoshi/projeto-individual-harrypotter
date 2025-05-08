var respostas = []
var casaVencedora = '';

const divResultado = document.querySelector('.hidenResult');

function enviar (){
        var var_animal = ''
        var var_odio = ''
        var var_troll = ''
        var var_aprender = ''
        var var_flores = ''

        const animalSelecionado = document.querySelector('input[name="animal"]:checked');
        const odioSelecionado = document.querySelector('input[name="odiaria"]:checked');
        const trollSelecionado = document.querySelector('input[name="troll"]:checked');
        const aprenderSelecionado = document.querySelector('input[name="aprender"]:checked');
        const floresSelecionado = document.querySelector('input[name="flores"]:checked');

        if (animalSelecionado) {
            var_animal = animalSelecionado.value;
        } else {
            alert("Por favor, escolha um animal de estimação.");
            return;
        }

        if (odioSelecionado) {
            var_odio = odioSelecionado.value;
        } else {
            alert("Por favor, responda o que você mais odiaria que te chamassem.");
            return;
        }

        if (trollSelecionado){
            var_troll = trollSelecionado.value
        } else {
            alert("Por favor, responda sobre a situação com o troll.");
            return;
        }

        if (aprenderSelecionado){
            var_aprender = aprenderSelecionado.value
        } else {
            alert("Por favor, responda o que você mais espera aprender.")
            return;
        }
        
        if (floresSelecionado){
            var_flores = floresSelecionado.value
        } else {
            alert("Por favor, responda sobre o cheiro da flor.");
            return
        }


        respostas.push(var_animal,var_odio,var_troll,var_aprender,var_flores);
        
        


        var grifinoria = 0;
        var sonserina = 0;
        var corvinal = 0;
        var lufalufa = 0;

        //1 questao
        if(respostas[0] == 'Coruja'){
            grifinoria += 3
            corvinal +=2
            lufalufa ++
        }else if(respostas[0] == 'Gato'){
            sonserina +=3
            grifinoria +=2
            corvinal++
        }else{
            lufalufa +=3
            corvinal +=2
            sonserina++

        }
        
        //2 questao
        if(respostas[1] == 'Ignorante'){
            corvinal += 3
        }else if (respostas[1] =='Egoista' ){
            lufalufa += 3
        }else if (respostas[1] == 'Ordinario'){
            sonserina +=3
        }else{
            grifinoria +=3
        }
        
        //3 questao
        if(respostas[2] == 'voluntario'){
            grifinoria+=3
        }else if(respostas[2] == 'sugerir'){
            sonserina+=3

        }else if(respostas[2] == 'confundir'){
            corvinal+=3
            
        }else{
            lufalufa+=3
        }

        //4 questao
        if(respostas[3] == 'criaturas'){
            lufalufa+=4
            grifinoria+=3
        }else if (respostas[3] == 'voar'){
            sonserina++
            grifinoria++
            lufalufa++
            corvinal++
        }else if (respostas[3] == 'transfiguração' ){
            grifinoria+=4
            corvinal+=3
        }else if (respostas[3] == 'aparatar' ){
            sonserina++
            grifinoria++
            lufalufa++
            corvinal++
        }else if (respostas[3] == 'feitiços' ){
            corvinal+=4
            sonserina+=3
            lufalufa+=2
            grifinoria+=1
        }else{
            sonserina+=4
            corvinal+=3
        }

        //5 questao
        if (respostas[4] =='mar'){
            sonserina+=3
            corvinal+=2

        }else if (respostas[4]=='lar'){
            lufalufa+=3
            grifinoria+=2
        }else if (respostas[4]=='lareira'){
            grifinoria+=3
            lufalufa+=2
        }else{
            corvinal+=3
            sonserina+=2
        }

        

        //calculo do maior:
        var maxPontos = -1; 
    
        if (grifinoria > maxPontos) {
            maxPontos = grifinoria;
            casaVencedora = "Grifinória";
        }
        if (sonserina > maxPontos) {
            maxPontos = sonserina;
            casaVencedora = "Sonserina";
        }
        if (corvinal > maxPontos) {
            maxPontos = corvinal;
            casaVencedora = "Corvinal";
        }
        if (lufalufa > maxPontos) {
            maxPontos = lufalufa;
            casaVencedora = "Lufa-Lufa";
        }





        if (casaVencedora == "Grifinória" ){
            divResultado.innerHTML = `<img src="img/grifinoria.png" alt="">`
        }else if(casaVencedora == "Sonserina"){
            divResultado.innerHTML = `<img src="img/sonserina.png" alt="">`
        }else if(casaVencedora == "Corvinal"){
            divResultado.innerHTML = `<img src="img/corvinal.png" alt="">`
        }else if(casaVencedora == "Lufa-Lufa"){
            divResultado.innerHTML = `<img src="img/lufalufa.png" alt="">`
        }else {
            alert('ocorreu um erro')
        }

        divResultado.style.display = 'block'
    }
