function clicar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var btn = document.getElementById('btn')
    var txt = document.getElementById('txt')
    var res = document.getElementById('txt-res')

    if (inicio.value == "" || fim.value == "" || passo.value == "") {
        alert('Preencha todos os campos...')
    } else {
        var inicial = Number.parseFloat(inicio.value)
        var final = Number.parseFloat(fim.value)
        var passos = Number.parseFloat(passo.value)

        if (inicial > final) {
            alert('O valor INICIAL não pode ser maior que o valor FINAL!')
            return
        }

        if (passos > final) {
            alert('O valor do PASSO não pode ser maior que o valor FINAL !')
            return
        }

        res.innerHTML = ""

        for(var resultoi = inicial; resultoi <= final; resultoi += passos ){
            txt.style.display = 'none'
            res.style.display = 'block'
            res.innerHTML +=`${resultoi} → `
        }

        res.innerHTML += `FIM`
    }
}