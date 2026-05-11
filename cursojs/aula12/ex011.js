var nota = 5.9
console.log(`Sua nota é ${nota}.`)
if(nota < 5){
    console.log('Reprovado')
} else if(nota >=5 && nota < 7){
    console.log('Recuperação')
} else if(nota >=7){
    console.log('Aprovado')
}