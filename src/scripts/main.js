AOS.init();

const dataEvento = new Date("Aug 10, 2025 08:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((distanciaEvento % (1000 * 60)) / (1000));

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        let html = '<div style="background-color: #FF0000; padding: 10px;">Evento expirado!</div>';
        document.getElementById('finalizado').innerHTML = html;
        document.getElementById('contador').innerHTML = '';
    }
},1000);