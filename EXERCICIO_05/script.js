let numeros = []

function analisar_numero() {
    let num = Number(document.getElementById("txtanalisador").value)
    let res = document.getElementById("seltab")
    let resultados = document.getElementById("resultados")

    if (num < 1 || num > 100) {
        alert("Número inválido. Insira um número entre 1 e 100.")
    } else {
        numeros.push(num)

        res.innerHTML = ""
        for (let i = 0; i < numeros.length; i++) {
            res.innerHTML += `<option>Valor ${numeros[i]} adicionado</option>`
        }

        let totalNumeros = numeros.length
        let maior = Math.max(...numeros)
        let menor = Math.min(...numeros)
        let soma = numeros.reduce((acc, val) => acc + val, 0)
        let media = soma / totalNumeros

        resultados.innerHTML = `
            <p>Total de números cadastrados: ${totalNumeros}</p>
            <p>Maior valor: ${maior}</p>
            <p>Menor valor: ${menor}</p>
            <p>Soma dos valores: ${soma}</p>
            <p>Média dos valores: ${media.toFixed(2)}</p>
        `
    }

    document.getElementById("txtanalisador").value = ""
    document.getElementById("txtanalisador").focus()
}
