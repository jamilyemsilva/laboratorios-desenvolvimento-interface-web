console.log("WeatherLab iniciado.");

const botaoLocalizacao = document.querySelector(
        "#botao-localizacao");

const mensagemStatus =document.querySelector(
        "#mensagem-status");

//Verificando se o navegador tem suporte à API 
if (!("geolocation" in navigator)) {
    mensagemStatus.textContent ="Geolocalização não disponível neste navegador.";
    botaoLocalizacao.disabled =true;
}


function sucessoLocalizacao(posicao){
    console.log("Objeto completo:", posicao);

    const latitude = posicao.coords.latitude;
    const longitude = posicao.coords.longitude;
    const precisao = posicao.coords.accuracy;

    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
    console.log(`Precisão estimada: ${precisao} metros`);
}

function erroLocalizacao(erro){
    console.error("Código do erro:", erro.code, erro.message);

    if (erro.code === 1) {
    mensagemStatus.textContent = "Permissão de localização negada pelo usuário.";
    } else if (erro.code === 2) {
    mensagemStatus.textContent = "Localização indisponível no momento.";
    } else if (erro.code === 3) {
    mensagemStatus.textContent = "Tempo excedido ao tentar obter localização.";
    } else {
    mensagemStatus.textContent = "Não foi possível obter sua localização.";
    }
}

const opcoesLocalizacao = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 300000
};

botaoLocalizacao.addEventListener(
    "click",
    () => {
        navigator.geolocation.getCurrentPosition(
                sucessoLocalizacao,
                erroLocalizacao,
                opcoesLocalizacao
            );
});

