function preencheJson(value){

    if (value == 1){

        var tituloSalvador = document.getElementById("titulo_salvador").innerText;
        var primeiraDescricaoSalvador = document.getElementById("li_1_salvador").innerText;
        var segundaDescricaoSalvador = document.getElementById("li_2_salvador").innerText;
        var terceiraDescricaoSalvador = document.getElementById("li_3_salvador").innerText;
        var precoSalvador = document.getElementById("preco_salvador").innerText;
        var valorPacoteSalvador = {
            "Lugar": tituloSalvador,
            "Descrição 1": primeiraDescricaoSalvador,
            "Descrição 2": segundaDescricaoSalvador,
            "Descrição 3": terceiraDescricaoSalvador,
            "Preço": precoSalvador
        }

        console.log(valorPacoteSalvador);
        
    } else if (value == 2){

        var tituloFortaleza = document.getElementById("titulo_fortaleza").innerText;
        var primeiraDescricaoFortaleza = document.getElementById("li_1_fortaleza").innerText;
        var segundaDescricaoFortaleza = document.getElementById("li_2_fortaleza").innerText;
        var terceiraDescricaoFortaleza = document.getElementById("li_3_fortaleza").innerText;
        var precoFortaleza = document.getElementById("preco_fortaleza").innerText;
        var valorPacoteFortaleza = {
            "Lugar": tituloFortaleza,
            "Descrição 1": primeiraDescricaoFortaleza,
            "Descrição 2": segundaDescricaoFortaleza,
            "Descrição 3": terceiraDescricaoFortaleza,
            "Preço": precoFortaleza
        };

        console.log(valorPacoteFortaleza);
    
    } else if (value == 3){

        var tituloCampinas = document.getElementById("titulo_campinas").innerText;
        var primeiraDescricaoCampinas = document.getElementById("li_1_campinas").innerText;
        var segundaDescricaoCampinas = document.getElementById("li_2_campinas").innerText;
        var terceiraDescricaoCampinas = document.getElementById("li_3_campinas").innerText;    
        var precoCampinas = document.getElementById("preco_campinas").innerText;
        var valorPacoteCampinas = {
            "Lugar": tituloCampinas,
            "Descrição 1": primeiraDescricaoCampinas,
            "Descrição 2": segundaDescricaoCampinas,
            "Descrição 3": terceiraDescricaoCampinas,
            "Preço": precoCampinas
        };

        console.log(valorPacoteCampinas);
    } 
}