const formCep = document.querySelector('#formCep');
const inputCep = document.querySelector('#cep');
const botaoBuscar = document.querySelector('#botaoBuscar');
const mensagem = document.querySelector('#mensagem');
const resultado = document.querySelector('#resultado');

const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const ddd = document.querySelector('#ddd');



inputCep.addEventListener('input', () => {

  let cep = inputCep.value.replace(/\D/g, '');

  if (cep.length > 5) {
    cep = `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
  }

  inputCep.value = cep;
});



formCep.addEventListener('submit', async (evento) => {
evento.preventDefault();

  const cep = inputCep.value.replace(/\D/g, '');

  mensagem.innerText = '';
  resultado.classList.add('oculto');


if (cep.length !== 8) {
    mensagem.innerText = 'Digite um CEP válido com 8 números.';
    inputCep.focus();
    return;
  }

  try {

    botaoBuscar.disabled = true;
    botaoBuscar.innerText = 'Buscando...';
    mensagem.innerText = 'Consultando a API ViaCEP...';


const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!resposta.ok) {

      throw new Error('Não foi possível consultar o serviço.');

    }

const endereco = await resposta.json();

    if (endereco.erro) {

      mensagem.innerText = 'CEP não encontrado.';

      return;

    }



    logradouro.innerText = endereco.logradouro || 'Não informado';
    bairro.innerText = endereco.bairro || 'Não informado';
    cidade.innerText = endereco.localidade || 'Não informado';
    estado.innerText = endereco.uf || 'Não informado';
    ddd.innerText = endereco.ddd || 'Não informado';

    mensagem.innerText = 'Consulta realizada com sucesso!';
    resultado.classList.remove('oculto');

if (endereco.localidade) {
      buscarClima(endereco.localidade, endereco.uf);
    }

  } catch (erro) {

      console.error(erro);
      mensagem.innerText = 'Erro ao consultar o CEP. Verifique a internet e tente novamente.';
  
} finally {

      botaoBuscar.disabled = false;
      botaoBuscar.innerText = 'Buscar';
    }
    
});

const botaoRecarregar = document.querySelector('#botaoRecarregar');

if (botaoRecarregar) {
  botaoRecarregar.addEventListener('click', () => {
    window.location.href = 'loading.html';
  });
}

const weatherResult = document.querySelector('#wf-weather-result');
const wfLocation = document.querySelector('#wf-location-title');
const wfTempNow = document.querySelector('#wf-temp-now');
const wfDescription = document.querySelector('#wf-description');
const wfTempIcon = document.querySelector('#wf-temp-icon');
const wfMainTemp = document.querySelector('#wf-main-temp');
const wfTempMax = document.querySelector('#wf-temp-max');
const wfTempMin = document.querySelector('#wf-temp-min');
const wfHumidity = document.querySelector('#wf-humidity-val');
const wfWind = document.querySelector('#wf-wind-val');

const climaApiKey = '8a60b2de14f7a17c7a11706b2cfcd87c';

async function buscarClima(cidade, uf) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)},BR&appid=${climaApiKey}&units=metric&lang=pt_br`;

    const resposta = await fetch(apiUrl);
    const json = await resposta.json();

    if (json.cod === 200) {
      wfLocation.innerText = `${json.name}, ${uf || json.sys.country}`;
      wfTempNow.innerHTML = `${Math.round(json.main.temp)}&deg;C`;
      wfDescription.innerText = json.weather[0].description;
wfTempIcon.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
      wfTempMax.innerHTML = `${Math.round(json.main.temp_max)}&deg;C`;
      wfTempMin.innerHTML = `${Math.round(json.main.temp_min)}&deg;C`;
      wfHumidity.innerText = `${json.main.humidity}%`;
      wfWind.innerText = `${json.wind.speed.toFixed(1)} km/h`;

const icone = json.weather[0].icon;
      const descricao = (json.weather[0].description || '').toLowerCase();

wfMainTemp.classList.remove('video-nublado', 'video-chuva', 'video-ceu-limpo', 'video-poucas', 'video-pancadas');

      if (descricao.includes('chuva leve') || descricao.includes('light rain')) {
        wfMainTemp.classList.add('video-chuva');
      } else if (icone.startsWith('09') || icone.startsWith('10') || icone.startsWith('11') || descricao.includes('pancadas de chuva') || descricao.includes('shower rain') || descricao.includes('tempestade') || descricao.includes('thunderstorm')) {
        wfMainTemp.classList.add('video-pancadas');
      } else if (icone.startsWith('03') || icone.startsWith('04')) {
        wfMainTemp.classList.add('video-nublado');
      } else if (icone.startsWith('02') || descricao.includes('poucas nuvens') || descricao.includes('few clouds')) {
        wfMainTemp.classList.add('video-poucas');
      } else if (icone.startsWith('01') || descricao.includes('céu limpo') || descricao.includes('clear sky')) {
        wfMainTemp.classList.add('video-ceu-limpo');
      }

      weatherResult.classList.add('show');
    } else {
      wfTempNow.innerText = 'Indisponível';
      wfDescription.innerText = 'Clima não encontrado';
      weatherResult.classList.add('show');
    }
  } catch (erro) {
    console.error('Erro ao buscar o clima:', erro);
    wfTempNow.innerText = 'Erro';
    wfDescription.innerText = 'Não foi possível carregar o clima';
    weatherResult.classList.add('show');
  }
}
