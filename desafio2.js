//Escolha de números aleatórios
let numero = Math.random()*100
let numeroArredondado = Math.round(numero)

console.log('O número escolhido foi: ',numeroArredondado)

//função que vai chamar as condicionais
function intervalo(){
    if(numeroArredondado >= 0 && numeroArredondado <= 25){
        console.log('Intervalo de [0,25]')
    }
    else if(numeroArredondado >= 25 && numeroArredondado <= 50){
        console.log('Intervalo de [25,50]')
    }
    else if (numeroArredondado >= 50 && numeroArredondado <= 75){
        console.log('Intervalo de [50,75]')
    }
    else if (numeroArredondado >= 75 && numeroArredondado <= 100){
        console.log('Intervalo de [75,100]')
    }
    else{
        console.log('Fora do intervalo')
    }
}

intervalo()