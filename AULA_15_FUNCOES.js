function impar_par(numero){
    if (numero % 2 == 0){
        return "Par!"
    } else{
        return "Impar!"
    }
}

let resultado = impar_par(12)
console.log(resultado)

console.log("----------------------------")

let variavel = function(x){
    return x * 2
}

console.log(variavel(5))

console.log("----------------------------")

function fatorial(numero){
    let fatorial = 1
    for (let i = numero; i > 1; i--){
        fatorial *= i
    } return fatorial
}

console.log(fatorial(5))
