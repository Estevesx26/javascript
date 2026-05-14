var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora <= 12){
    console.log(`Bom dia`)
} else if(hora >= 13 && hora <= 17){
    console.log(`boa tarde`)
} else if(hora >= 18 && hora <= 24){
    console.log(`boa noite`)
} else if(hora >= 1 && hora <= 5){
    console.log(`vai dormir`)
}