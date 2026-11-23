console.log("WeatherLab iniciado.");

const botaoLocalizacao = document.querySelector("#botao-localizacao");
const mensagemStatus =document.querySelector("#mensagem-status");
const resultado = document.querySelector("#resultado");
const temperatura = document.querySelector("#temperatura");
const sensacao = document.querySelector("#sensacao");
const umidade = document.querySelector("#umidade");
const vento = document.querySelector("#vento");
const coordenadas = document.querySelector("#coordenadas");

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
    carregarClima(latitude, longitude)
}

function erroLocalizacao(erro){
    console.error("Código do erro:", erro.code, erro.message);
    botaoLocalizacao.disabled = true;
    if (erro.code === 1) {
        mostrarMensagem("Permissão de localização negada pelo usuário.");
    } else if (erro.code === 2) {
        mostrarMensagem("Localização indisponível no momento.");
    } else if (erro.code === 3) {
        mostrarMensagem("Tempo excedido ao tentar obter localização.");
    } else {
        mostrarMensagem("Não foi possível obter sua localização.");
    }
}

// Passos 38 a 41: Apresentando os dados na interface
function renderizarClima(dados, latitude, longitude) {
  temperatura.textContent = `${dados.current.temperature_2m} ${dados.current_units.temperature_2m}`;
  sensacao.textContent = `${dados.current.apparent_temperature} ${dados.current_units.apparent_temperature}`;
  umidade.textContent = `${dados.current.relative_humidity_2m} ${dados.current_units.relative_humidity_2m}`;
  vento.textContent = `${dados.current.wind_speed_10m} ${dados.current_units.wind_speed_10m}`;

  coordenadas.textContent = `Latitude: ${latitude.toFixed(4)} | Longitude: ${longitude.toFixed(4)}`;

  // Revela a seção de resultados na interface
  resultado.hidden = false;
}

function mostrarMensagem(texto){
    mensagemStatus.textContent = texto;
}

const opcoesLocalizacao = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 300000   
};

botaoLocalizacao.addEventListener(
    "click",
    () => {
        botaoLocalizacao.disabled = true;
        mostrarMensagem("Obtendo localização...");
        
        navigator.geolocation.getCurrentPosition(
                sucessoLocalizacao,
                erroLocalizacao,
                opcoesLocalizacao
            );
});

// Passos 27 a 35: Buscando dados na API externa
async function carregarClima(latitude, longitude) {
  // Passo 28: Construindo os parâmetros de consulta
    try{
        const parametros = new URLSearchParams({
        latitude: latitude,
        longitude: longitude,
        current:
            "temperature_2m," +
            "apparent_temperature," +
            "relative_humidity_2m," +
            "weather_code," +
            "wind_speed_10m",
        timezone: "auto"
        });

        // Passo 29: Montando a URL completa
        const url = `https://api.open-meteo.com/v1/forecast?${parametros}`;

        // Passos 30 e 31: Fazendo a requisição HTTP e aguardando a resposta
        const resposta = await fetch(url);
        console.log("Resposta HTTP:", resposta);

        // Passo 33: Verificando se a requisição foi bem-sucedida (status 200-299)
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        // Passos 34 e 35: Convertendo o JSON para objeto JavaScript
        const dados = await resposta.json();
        // Chamando a função que vai desenhar na tela (próximo passo)
        renderizarClima(dados, latitude, longitude);
        mostrarMensagem("Condições meteorológicas atualizadas.");
    } catch(erro){
        // Passos 48 e 49: Log técnico no console, mensagem amigável na tela
        console.error("Falha ao consultar API:", erro);
        mostrarMensagem("Não foi possível consultar os dados meteorológicos. \n Tente novamente.");
    } finally {
        // Passo 46: Reabilita o botão ao final de todo o processo
        botaoLocalizacao.disabled = false;
    }
}


