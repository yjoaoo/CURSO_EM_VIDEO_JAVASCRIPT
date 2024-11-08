// ---------------------- WHILE -----------------------------------

var contador = 1

while(contador < 4){
    console.log(`Passo: ${contador}`)
    contador += 1 // += 1 === contador++
}

console.log("---------------------------")
// --------------------- DO WHILE ----------------------------------

var contador = 1

do {
    console.log(`Passo: ${contador}`)
    contador += 1 // += 1 === contador++
} while (contador < 4)
console.log("---------------------------")


// ----------------------- FOR ----------------------------------

for(var contador = 1; contador <= 5; contador += 1){
    console.log(`Passo: ${contador}`)
}