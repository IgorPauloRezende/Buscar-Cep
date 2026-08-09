const cartaoClima = document.getElementById('wf-main-temp');
const cartaoJogar = document.querySelector('.jogar');
const cartaoEsporte = document.querySelector('.Esporte');

cartaoJogar.style.display = 'none';
cartaoEsporte.style.display = 'none';

function escolherCartao() {
  const tempoChuvoso =
    cartaoClima.classList.contains('video-chuva') ||
    cartaoClima.classList.contains('video-pancadas');

  if (tempoChuvoso) {
    cartaoJogar.style.display = 'block';
    cartaoEsporte.style.display = 'none';
  } else {
    cartaoJogar.style.display = 'none';
    cartaoEsporte.style.display = 'block';
  }
}

const observador = new MutationObserver(escolherCartao);
observador.observe(cartaoClima, { attributes: true, attributeFilter: ['class'] });
