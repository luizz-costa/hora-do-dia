function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`

    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'img/manha.jpg'
        document.body.style.background = '#ffe4c4'
    }else if (hora >=12 && hora < 18){
        //Boa tarde!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#d39448'
    }else {
        //Boa noite!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#04041f'
    }
}
