function tabuada() {
    let numero = Number(document.getElementById("txttabuada").value);
    let resultado = document.getElementById("res");


    if (isNaN(numero) || numero === 0) {
        resultado.innerHTML = "Por favor, insira um número válido.";
        return;
    }

    resultado.innerHTML = ""; 
    let tabela = `<h2>Tabuada do ${numero}:</h2><ul>`; 


    for (let i = 1; i <= 10; i++) {
        tabela += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }

    tabela += "</ul>"; 
    resultado.innerHTML = tabela; 
}