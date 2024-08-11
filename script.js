function draw() {
    const nome = document.getElementById('nome').value;
    const br = document.getElementById('br').value;
    const faixaEtaria = document.getElementById('faixa-etaria').value;
    const tipoPresente = document.getElementById('tipo-presente').value;
    const valor = document.getElementById('valor').value;
    const codigo = document.getElementById('codigo').value;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';

    ctx.fillText(nome, 20, 100);
    ctx.fillText(`BR055500${br}`, 300, 50);
    ctx.fillText(faixaEtaria, 20, 80);
    ctx.fillText(tipoPresente, 50, 100);
    ctx.fillText(valor, 50, 100);
    ctx.fillText(codigo, 50, 100);
}