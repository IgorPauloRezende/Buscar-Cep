function atualizarRelogio() {
    const relogio = document.getElementById('brasilia-clock');
    if (relogio) {
        relogio.textContent = new Intl.DateTimeFormat('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'America/Sao_Paulo'
        }).format(new Date());
    }
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
