# 🚀 Buscar-Cep

Uma aplicação web que consulta o **endereço completo** a partir de um CEP, mostra a **localização no mapa** e o **clima atual da cidade**, com uma tela de carregamento animada e visual dinâmico que muda de acordo com o tempo.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Funcionalidades

- 🔎 **Consulta de CEP**: digite um CEP e veja logradouro, bairro, cidade, estado e DDD.
- 🗺️ **Mapa da localização**: ao consultar o CEP, um mapa interativo (Leaflet + OpenStreetMap) mostra o endereço com um marcador e popup.
- ⛅ **Clima em tempo real**: ao encontrar a cidade, exibe temperatura atual, máxima, mínima, umidade, vento e descrição do tempo.
- 🎬 **Vídeos de fundo dinâmicos**: o cenário do clima muda conforme a condição do tempo (céu limpo, nublado, chuva leve, pancadas de chuva, poucas nuvens).
- 🤖 **Seleção inteligente de cartão**: mostra um card de "tempo bom para ficar em casa" quando chove, ou "tempo bom para praticar um esporte" quando o tempo está bom.
- 💫 **Splash screen animada**: tela de carregamento com animação SVG (GSAP + DrawSVGPlugin).
- 🕐 **Relógio de Brasília**: hora atual exibida na barra de navegação.
- 🎉 **Modo festa**: botão de música na barra de navegação que troca os GIFs da página por versões de festa; clique de novo para voltar ao normal.

---

## 🛠️ Tecnologias utilizadas

- **ViaCEP** — API pública de consulta de CEP (https://viacep.com.br)
- **OpenWeatherMap** — API de previsão do tempo (https://openweathermap.org)
- **Leaflet** — biblioteca de mapas interativos (https://leafletjs.com)
- **OpenStreetMap / Nominatim** — mapas e geocodificação gratuitos (https://www.openstreetmap.org)
- **Supabase (Storage)** — armazenamento em nuvem dos GIFs e vídeos do projeto (https://supabase.com)
- **GSAP + DrawSVGPlugin** — animação da tela de carregamento
- **Font Awesome** — ícones
- **HTML5, CSS3 e JavaScript** (vanilla)

> ⚠️ **Atenção**: o projeto consome a API do OpenWeatherMap, que precisa de uma chave (`API key`). A chave atual está no arquivo `script.js`. Para fins de publicação, considere protegê-la (ex.: proxy/backend) e evite expor chaves em repositórios públicos.

---

## 🚀 Como executar

1. **Clone** o repositório:

   ```bash
   git clone https://github.com/IgorPauloRezende/Buscar-Cep.git
   ```

2. **Acesse** a pasta do projeto:

   ```bash
   cd Buscar-Cep
   ```

3. **Abra** o arquivo `index.html` no navegador — ou use uma extensão como *Live Server* (VS Code) para melhor experiência.

> A primeira vez que a página abre, a tela de carregamento (`loading.html`) é exibida. Ela é mostrada apenas uma vez por sessão (controlada por `sessionStorage`). Use o botão 🔄 no topo para voltar à tela de carregamento.

---

## 🧠 Como funciona

```
Usuário digita o CEP
        │
        ▼
┌──────────────────┐
│  API ViaCEP      │  → Retorna logradouro, bairro, cidade, UF e DDD
└──────────────────┘
        │
        ├──────────────────────────────┐
        ▼                              ▼
┌──────────────────────────┐  ┌──────────────────────┐
│ Nominatim (OpenStreetMap)│  │    OpenWeatherMap     │
│ → latitude/longitude     │  │ → clima da cidade     │
└──────────────────────────┘  └──────────────────────┘
        │                              │
        ▼                              ▼
Exibe endereço + mapa (Leaflet) + clima + vídeo de fundo + cartão (casa/esporte)
```

---

## 📁 Estrutura do projeto

```
Buscar-Cep/
├── index.html          # Página principal (consulta de CEP e clima)
├── loading.html        # Tela de carregamento (splash)
├── style.css           # Estilos da página principal
├── loading.css         # Estilos da tela de carregamento
├── script.js           # Lógica da consulta de CEP e clima
├── condicao.js         # Escolhe o cartão (casa/esporte) pelo clima
├── clock.js            # Relógio de Brasília
├── festa.js            # Modo festa: troca os GIFs por versões de festa
├── images/             # GIFs do Astrobot (as versões em uso ficam no Supabase)
└── video/              # Vídeos de fundo por condição do tempo (as versões em uso ficam no Supabase)
    ├── Céu Limpo/
    ├── Chuva leve/
    ├── Nublado/
    ├── Pancadas de chuva/
    └── Poucas nuvens/
```

---

## 📸 Exemplo de uso

```
CEP: 01001-000
→ Praça da Sé, Sé, São Paulo, SP, DDD: 11
→ Mapa: marcador na Praça da Sé (São Paulo)
→ Clima: 24°C, poucas nuvens
```

---

## 📄 Licença

Este projeto foi criado para fins de estudo. Sinta-se à vontade para usar e modificar.
