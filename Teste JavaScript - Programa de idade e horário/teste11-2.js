function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('result')
    var Nmes = document.getElementById('Xmes')

    
    if(fano.value == 0 || fano.value > ano){
        window.alert('Dados inválidos')
    } else if(Nmes.value > mes){
        var fsex = document.getElementsByName('radisex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')//cria a tag <img>
        var divinf = document.getElementById('informacoes')
        var resultado = idade - 1
        img.setAttribute('id', "foto") // Cria um id nomeado "foto"
        img.style.borderRadius ='20px'
        img.style.paddingTop = '10px'
    
        if(fsex[0].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
               img.setAttribute('src','criança.jpg')  //criança
               img.style.marginTop = '2em'
               divinf.style.height = '30em'
            } else if( idade <= 14){
                img.setAttribute('src','preadolescente.png') //pré-adolescente
            } else if(idade <= 19){
                img.setAttribute('src','criança.jpg') //adolescente
                divinf.style.height = '25em'
            }else if(idade <= 59){
                img.setAttribute('src','adulto.png') //adulto
            }else{
                img.setAttribute('src','idoso.png') //idoso
            }

        } else if (fsex[1].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
            } else if( idade <= 14){
                //pré-adolescente
            } else if(idade <= 19){
                //adolescente
            }else if(idade <= 59){
                //adulto
            }else{
                //idoso
            }
        }
        res.innerHTML = `Seu Gênero é "${genero}" e sua idade é <strong>${resultado}</strong> anos<br>`
        res.appendChild(img) // adiciona um elemento
    }
    else{
            var fsex = document.getElementsByName('radisex')
            var idade = ano - fano.value
            var genero = ''
            var img = document.createElement('img')//cria a tag <img>
            var divinf = document.getElementById('informacoes')

            img.setAttribute('id', "foto") // Cria um id nomeado "foto"
            img.style.borderRadius ='20px'
            img.style.paddingTop = '10px'
        
            if(fsex[0].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade <= 10){
                   img.setAttribute('src','criança.jpg')  //criança
                   img.style.marginTop = '2em'
                   divinf.style.height = '30em'
                } else if( idade <= 14){
                    img.setAttribute('src','preadolescente.png') //pré-adolescente
                } else if(idade <= 19){
                    img.setAttribute('src','criança.jpg') //adolescente
                    divinf.style.height = '25em'
                }else if(idade <= 59){
                    img.setAttribute('src','adulto.png') //adulto
                }else{
                    img.setAttribute('src','idoso.png') //idoso
                }
    
            } else if (fsex[1].checked){
                genero = 'Homem'
                if(idade >= 0 && idade <= 10){
                    //criança
                } else if( idade <= 14){
                    //pré-adolescente
                } else if(idade <= 19){
                    //adolescente
                }else if(idade <= 59){
                    //adulto
                }else{
                    //idoso
                }
            }
            res.innerHTML = `Seu Gênero é "${genero}" e sua idade é <strong>${idade}</strong> anos<br>`
            res.appendChild(img) // adiciona um elemento
    }
}
