let saldoVitorias = ""
let nivel = ""
rank(60, 20, )


function rank(vitoria, derrota, saldoVitoria ){
    console.log("Números de " + vitoria)
    console.log("Números de " + derrota)
    console.log(saldoVitoria = vitoria - derrota)
    console.log("Saldo de vitorias " + saldoVitoria)
    
 saldoVitorias = saldoVitoria
 
    if (saldoVitoria <= 10){
        console.log(nivel = "Ferro")
    }else if(saldoVitoria >= 11 && saldoVitoria <= 20){
        console.log(nivel ="Bronze")
    }else if(saldoVitoria >= 21 && saldoVitoria <= 50){
        console.log(nivel = "Prata")
    }else if(saldoVitoria >= 51 && saldoVitoria <= 80){
        console.log(nivel = "Ouro")
    }else if(saldoVitoria >= 81 && saldoVitoria <= 90){
        console.log(nivel = "Diamante")
    }else if(saldoVitoria >= 91 && saldoVitoria <= 100){
        console.log(nivel = "Lendário")
    }else {
        console.log(nivel= "imortal")
    }
       
    }

    for (let i = 0; i < 1; i++) {

    }
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)

