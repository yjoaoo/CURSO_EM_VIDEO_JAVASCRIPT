let numero = [5, 8, 2, 9, 3]

numero.push(10) // adicionar numeros
numero.sort() // deixar em ordem
console.log(numero) // vetor completo
console.log(numero.length) // quantos indices tem
console.log(numero[0]) // acessando indice 

console.log("----------------------------")

let valores = [8, 1, 7, 4,]

for( i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

console.log("----------------------------")


// for in 
for( let i in valores){
    console.log(valores[i])
}

console.log("----------------------------")

let posição = valores.indexOf(7)
console.log(`O valor 7 está na posição ${posição}`)