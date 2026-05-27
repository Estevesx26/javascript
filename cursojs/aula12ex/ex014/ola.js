function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} hrs`

    if(hora >= 5 && hora <= 12){
        msg.innerHTML += `. Bom dia!`
        img.style.backgroundImage = "url(img/manha-01.jpg)"
        document.body.style.background = '#ffed75'
    }else if(hora > 12 && hora <= 18){
        msg.innerHTML += `. Boa tarde!`
        img.style.backgroundImage = "url(img/tarde-01.jpg)"
        document.body.style.background = '#bb4100'
    } else {
        msg.innerHTML += `. Boa noite!`
        img.style.backgroundImage = "url(img/noite-01.jpg)"
        document.body.style.background = '#070a1b'
    }
}