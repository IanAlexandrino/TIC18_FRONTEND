
function getElementosForm(){
    var form = document.forms[0];
    var elementos = form.elements;

    var divPai = document.getElementById("caixa_pagina_form");
    var divFilha = document.createElement("div");
    var tagImg = document.createElement("img");
    var tagH4 = document.createElement("h4");
    var tagUl =  document.createElement("ul");
    var tagLi1 =  document.createElement("li");
    var tagLi2 =  document.createElement("li");
    var tagLi3 =  document.createElement("li");
    var tagH3 = document.createElement("h3");

    var url = elementos.item(0).value;
    if(url == 0){
        alert("URL inválida, por favor preencha a url com valor válido!")
        return
    };

    var localDestino = (function() {
        if (elementos.item(1).value == 0) {
            alert("Local inválido, por favor preencha o local com valor válido!");
            throw "Programa encerrado pelo usuário";
        } else {
            return document.createTextNode(elementos.item(1).value);
        }
    })();

    var tipoViagem = (function() {
        if (elementos.item(2).value == 0) {
            alert("Tipo inválido, por favor preencha o tipo com valor válido!");
            throw "Programa encerrado pelo usuário";
        } else {
            return document.createTextNode(elementos.item(2).value);
        }
    })();
    
    var diaria = (function() {
        if (elementos.item(3).value == 0) {
            alert("Diária inválida, por favor preencha a diária com valor válido!");
            throw "Programa encerrado pelo usuário";
        } else {
            return document.createTextNode(elementos.item(3).value);
        }
    })();

    var servicos = (function() {
        if (elementos.item(4).value == 0) {
            alert("Serviços inválidos, por favor preencha os serviços com valor válido!");
            throw "Programa encerrado pelo usuário";
        } else {
            return document.createTextNode(elementos.item(4).value);
        }
    })();

    var preco = (function() {
        if (elementos.item(5).value == 0) {
            alert("Preço inválido, por favor preencha o preço com valor válido!");
            throw "Programa encerrado pelo usuário";
        } else {
            return document.createTextNode("R$ " + elementos.item(5).value);
        }
    })();

    tagImg.src=url;
    tagH4.appendChild(localDestino);
    tagLi1.appendChild(tipoViagem);
    tagLi2.appendChild(diaria);
    tagLi3.appendChild(servicos);
    tagH3.appendChild(preco);

    tagUl.appendChild(tagLi1);
    tagUl.appendChild(tagLi2);
    tagUl.appendChild(tagLi3);

    divFilha.appendChild(tagImg);
    divFilha.appendChild(tagH4);
    divFilha.appendChild(tagUl);
    divFilha.appendChild(tagH3);

    divPai.appendChild(divFilha);


    console.log(divPai);
}



