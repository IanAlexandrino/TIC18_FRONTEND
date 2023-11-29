function preencheJson(value){

    var titulo;
    var primeiraDescricao;
    var segundaDescricao;
    var terceiraDescricao;
    var preco;
    var valorPacote = {
        "Destino": "",
        "Descrição 1": "",
        "Descrição 2": "",
        "Descrição 3": "",
        "Preço": ""
    } 

    if (value == 1){

        titulo = document.getElementById("titulo_salvador").innerText;
        primeiraDescricao = document.getElementById("li_1_salvador").innerText;
        segundaDescricao = document.getElementById("li_2_salvador").innerText;
        terceiraDescricao = document.getElementById("li_3_salvador").innerText;
        preco = document.getElementById("preco_salvador").innerText;
        valorPacote = {
            "Destino": titulo,
            "Descrição 1": primeiraDescricao,
            "Descrição 2": segundaDescricao,
            "Descrição 3": terceiraDescricao,
            "Preço": preco
        }

        console.log(valorPacote);
        
    } else if (value == 2){

        titulo = document.getElementById("titulo_fortaleza").innerText;
        primeiraDescricao = document.getElementById("li_1_fortaleza").innerText;
        segundaDescricao = document.getElementById("li_2_fortaleza").innerText;
        terceiraDescricao = document.getElementById("li_3_fortaleza").innerText;
        preco = document.getElementById("preco_fortaleza").innerText;
        valorPacote = {
            "Destino": titulo,
            "Descrição 1": primeiraDescricao,
            "Descrição 2": segundaDescricao,
            "Descrição 3": terceiraDescricao,
            "Preço": preco
        };

        console.log(valorPacote);
    
    } else if (value == 3){

        titulo = document.getElementById("titulo_campinas").innerText;
        primeiraDescricao = document.getElementById("li_1_campinas").innerText;
        segundaDescricao = document.getElementById("li_2_campinas").innerText;
        terceiraDescricao = document.getElementById("li_3_campinas").innerText;    
        preco = document.getElementById("preco_campinas").innerText;
        valorPacote = {
            "Destino": titulo,
            "Descrição 1": primeiraDescricao,
            "Descrição 2": segundaDescricao,
            "Descrição 3": terceiraDescricao,
            "Preço": preco
        };

        console.log(valorPacote);
    } 
}