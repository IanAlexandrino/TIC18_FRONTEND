// Initialize the map
let map = L.map('map').setView([51.505, -0.09], 2);

// Set up the OSM layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// carregue o nome de todos os paises utilizando a API restcountries.com
//e adicione-os ao elemento <select id="paises">
// ver exercicio 1.8

// associe o evento change do elemento <select id="paises"> a uma função que
// mude a vista do mapa para o país selecionado
//crie uma variavel latitudeLongitude que pega a lat e long do pais selecionado 
// e utilize-a para mudar a vista do mapa

//Ex de uma versao estatica
let latLong = [-14.794851092521004, -39.25978803993592];
map.setView(latLong, 8);

function ValorOption(){
  var pais = document.querySelector("select").value;
  console.log(pais);

  switch(pais){
    case "Russia":

      fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(response => response.json())
      .then(data => {
      const latitude = data[0].latlng[0];
      const longitude = data[0].latlng[1];
      latLong = [latitude, longitude];
      map.setView(latLong, 8);
      })
      .catch(error => console.error('Erro ao obter dados do país:', error));
      break

    case "Brazil":  

      fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(response => response.json())
      .then(function(data) {
        console.log(data);
        return data;
      } )
      .then(data => {
      const latitude = data[0].latlng[0];
      const longitude = data[0].latlng[1];
      latLong = [latitude, longitude];
      map.setView(latLong, 8);
      })
      .catch(error => console.error('Erro ao obter dados do país:', error));
      break

    case "Portugal":

      fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(response => response.json())
      .then(data => {
      const latitude = data[0].latlng[0];
      const longitude = data[0].latlng[1];
      latLong = [latitude, longitude];
      map.setView(latLong, 8);
      })
      .catch(error => console.error('Erro ao obter dados do país:', error));
      break

    case "Africa":

      fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(response => response.json())
      .then(data => {
      const latitude = data[0].latlng[0];
      const longitude = data[0].latlng[1];
      latLong = [latitude, longitude];
      map.setView(latLong, 8);
      })
      .catch(error => console.error('Erro ao obter dados do país:', error));
      break

  }
}