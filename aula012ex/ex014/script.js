 function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    if(hora>=0 && hora< 12){
        img.src = 'manha.png'
        msg.innerHTML = `São extamente ${hora} horas. BOM DIA!`
        document.body.style.background = '#b7cdd8'
    }else if(hora>=12 && hora<18){
        img.src = 'tarde.png'
        msg.innerHTML = `São extamente ${hora} horas. BOA TARDE!`
        document.body.style.background = '#fc9a3d'
    }else{
        img.src = 'noite.png'
        msg.innerHTML = `São extamente ${hora} horas. BOA NOITE!`
        document.body.style.background = '#11151e'
    }
}