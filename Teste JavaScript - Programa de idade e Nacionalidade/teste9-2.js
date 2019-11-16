var idad = window.document.getElementById('buto')

idad.addEventListener('click', ver)

function ver(){
    var inpuIdad = window.document.getElementById('idade1')
    var resulIdad = window.document.querySelector('div#resulIdad')
    var pegaIdad = Number(inpuIdad.value)
    resulIdad.innerHTML = `Sua idade é <b>${pegaIdad}</b></br>`

    if(pegaIdad < 15){
        resulIdad.innerHTML += `Infelizmente você não tem <b>maturidade</b>
         para acessar o conteúdo ` 
    }else{
        resulIdad.innerHTML += `Você tem a <b>maturidade</b> permitida
         para acessar o conteúdo`
    }
} 

// PAIS

var nacio = document.getElementById('buton')

nacio.addEventListener('click', verificar)

function verificar(){
    var pegaPais = document.getElementById('country')
    var divorigem = document.getElementById('divOrigem')
    var resuNacio = pegaPais.value
    divOrigem.innerHTML = `Seu País de origem é ${resuNacio}<br>`
    
    if(resuNacio == 'Brasil'){
        divorigem.innerHTML += `Logo sua nacionalidade é Brasileiro(a)`
    }else{
        divorigem.innerHTML += `Logo sua nacionalidade é Estrangeiro(a)`
    }
}