var agora = new Date()
var dia_semana = agora.getDay()

/* 0 = domingo
   1 = segunda
   2 = terca
   3 = quarta
   4 = quinta
   5 = sexta
   6 = sabado
*/

console.log(dia_semana)

switch(dia_semana){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("segunda")
        break
    case 2:
        console.log("terca")
        break
    case 3:
        console.log("quarta")
        break
    case 4:
        console.log("quinta")
        break
    case 5:
        console.log("sexta")
        break
    case 6:
        console.log("sabado")
        break
    default:
        console.log("blalalal")
}

console.log("---------------------------")
// ---------------------------------------------------------

var operacao = "soma"
var num1 = 5        
var num2 = 3         

switch (operacao) {
    case "soma":
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
        break
    case "subtração":
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break
    case "multiplicação":
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
    case "divisão":
        if (num2 === 0) {
            console.log("Erro: divisão por zero não é permitida.")
        } else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
        }
        break
    default:
        console.log("Operação inválida.")
}
