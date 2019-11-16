//________________________________ Condições____________________________________
//Serve para dar mais de uma possibilidade numa função, chama-se desvio condicional
// e dá duas possibilidades

// if() significa "Se" - , no caso seria a possibilidade 1,
// e ela é caso de true, positivo

//else significa "Se não" - possiblidade 2, caso dê negativo, false

//----Condição Simples---- (sem else)

console.log('O código ta de boas :D')// para executar o console (ctrl + f5) ou node pasta/arquivo.js


var idade = 14
if(idade < 15){ // condição simples
    console.log(`Você não tem a idade suficiente para ver o conteúdo da página, 
    pois sua idade é ${idade}, sorry :/`)
}

var pais= 'Peru'
console.log(`Você vive no país ${pais}`)
if( pais == 'Brasil'){
    console.log('Você é Brasileiro(a)')
}else{
    console.log('Você é Estrangeiro(a)')
}


