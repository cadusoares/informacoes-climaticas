/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getClima() {
    $.ajax({
        metho: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=2e471aead2d38ab2af170db88326a3d7',
        dataType: 'json',
        success: function (data) {

            temperatura = data.main.temp - 273;
            var tempFormatada = temperatura.toFixed(2).split('.');
qweeqqweqweqwe
            $('#temperatura').html(tempFormatada + "º");

            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);

            $('#umidade').html(data.main.humidity);

            $('#pressao').html(data.main.pressure);
            
            var dataAmanhecer = new Date(data.sys.sunrise*1000);
            var descDataAmanhecer = 
            dataAmanhecer.getHours()+':'+dataAmanhecer.getMinutes();
            $('#amanhecer').html(descDataAmanhecer);
            
            var dataPorDoSol = new Date(data.sys.sunset*1000);
            var descDataPorDoSol = 
            dataPorDoSol.getHours()+':'+dataPorDoSol.getMinutes();
            $('#pordosol').html(descDataPorDoSol);
            
            var icone = data.weather[0].icon;
            var caminhoIcone = 'img/icones/'

            temperaturaMax = data.main.temp_max - 273;
            var tempMaxFormatada = temperaturaMax.toFixed(2).split('.');
            $('#temperaturaMax').html(tempMaxFormatada[0]+'.'+tempMaxFormatada[1]+"º");

            temperaturaMin = data.main.temp_min - 273;
            var tempMinFormatada = temperaturaMin.toFixed(2).split('.');
            $('#temperaturaMin').html(tempMinFormatada[0]+'.'+tempMinFormatada[1]+"º");

            $('#velocidadeAr').html(data.wind.speed);


        },
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}

function traduzirDescricao(descricao) {
    descricaoTraduzida = "";

    if (descricao == "clear sky") {
        descricaoTraduzida = "Céu Limpo";

    } else if (descricao == "few clouds") {
        descricaoTraduzida = "Poucas Nuvens";

    } else if (descricao == "scattered clouds") {
        descricaoTraduzida = "Nuvens Dispersas";

    } else if (descricao == "broken clouds") {
        descricaoTraduzida = "Parcealmente Nublado";

    } else if (descricao == "shower rain") {
        descricaoTraduzida = "Chuva Leve";

    } else if (descricao == "rain") {
        descricaoTraduzida = "Chuva";

    } else if (descricao == "thunderstorm") {
        descricaoTraduzida = "Trovoada";

    } else if (descricao == "snow") {
        descricaoTraduzida = "Neve";

    } else if (descricao == "mist") {
        descricaoTraduzida = "Névoa";

    }

    return descricaoTraduzida;

}

window.onload = function () {
    getClima();
};

