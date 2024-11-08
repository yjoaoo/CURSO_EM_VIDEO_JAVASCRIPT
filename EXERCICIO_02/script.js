function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(f_ano.value.length == 0 || Number(f_ano.value) > ano){
        window.alert("[ERRO] verifique o ano e tente novamente!")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(f_ano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade <10){
                img.setAttribute("src", "bebe_masculino.png")
            }else if (idade < 21){
                img.setAttribute("src", "jovem_masculino.png")
            }else if (idade < 50){
                img.setAttribute("src", "homem_adulto_.png")
            }else{
                img.setAttribute("src", "idoso_masculino.png")
            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <10){
                img.setAttribute("src", "bebe_feminino.png")
            }else if (idade < 21){
                img.setAttribute("src", "jovem_feminino.png")
            }else if (idade < 50){
                img.setAttribute("src", "mulher_adulta_.png")
            }else{
                img.setAttribute("src", "idosa_feminino.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}