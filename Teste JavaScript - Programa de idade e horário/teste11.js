function carregar(){
    var horario = window.document.getElementById('horario')
    var imghora = window.document.getElementById('imghora')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    horario.style.paddingTop = '10px'
    horario.style.fontSize = "15px"

    if(hora <= 12 && hora >= 5){
        imghora.src = 'img/manhã.jpg'
        horario.innerHTML= `Agora são ${hora}:${minutos} da manhã :D`
        document.body.style.backgroundColor = '#e5c29d'
    }else if(hora >= 13 && hora <= 18){
        imghora.src = "img/tarde.jpg"
        horario.innerHTML= `Agora são ${hora}:${minutos} da tarde :D`
        document.body.style.backgroundColor = '#ddb54c'
    }else{
        imghora.src = 'img/noite.jpg' 
        horario.innerHTML= `Agora são ${hora}:${minutos} da Noite :D`
        document.body.style.backgroundColor = 'black'
    }
}




