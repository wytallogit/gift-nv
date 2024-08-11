function draw() {
    const nome = document.getElementById('nome').value;
    const br = document.getElementById('br').value;
    const faixaEtaria = document.getElementById('faixa-etaria').value;
    const tipoPresente = document.getElementById('tipo-presente').value;
    const valor = document.getElementById('valor').value;
    const codigo = document.getElementById('codigo').value;
    const canvas = document.getElementById('canvas');
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';

    ctx.fillText(nome, 20, 30);
    ctx.fillText(`BR055500${br}`, 20, 55);
    ctx.fillText(`${faixaEtaria} anos`, 20, 75);
    ctx.fillText(tipoPresente, 50, 100);
    ctx.fillText(valor, 350, 30);
    ctx.fillText(codigo, 350, 55);

    ctx.font = '12px Arial';
    ctx.fillText(`KDM | Mesquita | Parnaíba importados | Shop Brasil | Casa Araújo & Kids | Avistão`, 20, 220);
}