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

        for(var resultoi = inicial; resultoi <= final; resultoi += passos ){
            txt.style.display = 'none'
            res.style.display = 'block'
            res.innerHTML +=`${resultoi} → `
        }
    }
}