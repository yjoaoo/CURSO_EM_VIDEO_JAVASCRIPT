var velocidade = 12
console.log(`A velocidade de seu carro é ${velocidade}km/h`)
if (velocidade > 60){
    console.log("Você foi multado!!!")
}
console.log("Dirija sempre usando cinto de segurança")

console.log("---------------------------")
// ---------------------------------------------------------

var pais = "EUA"
console.log(`Vivendo em ${pais}`)

if (pais != "Brasil"){
    console.log("Você é estrangeiro")
} else{
    console.log("Você é do Brasil")
}
// ---------------------------------------------------------
console.log("---------------------------")

var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log("Não vota")
} else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
} else{
    console.log("Voto obrigatorio")
}