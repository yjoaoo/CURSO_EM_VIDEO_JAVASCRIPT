function contar(){ 
    var inicio = Number(window.document.getElementById("txtinicio").value)
    var fim = Number(window.document.getElementById("txtfim").value)
    var passo = Number(window.document.getElementById("txtpasso").value)
    var resultado = ""

    for (let i = inicio; i <= fim; i += passo){
        resultado += i + " "
    }
    res.innerHTML = `Resultado: ${resultado}`

}