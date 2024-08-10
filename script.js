function draw() {
    const nome = document.getElementById('nome').value;
    const faixaEtaria = document.getElementById('faixa-etaria').value;
    const br = document.getElementById('br').value;
    const tipoPresente = document.getElementById('tipo-presente').value;
    const valor = document.getElementById('valor').value;
    const codigo = document.getElementById('codigo').value;

    carregar(nome, faixaEtaria, br, tipoPresente, valor, codigo)

}


function carregar(nome, faixaEtaria, br, tipoPresente, valor, codigo) {

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    // Preencher o fundo
    ctx.beginPath();
    ctx.fillStyle = "#F2F2F2";
    ctx.fillRect(0, 0, 1050, 600);
    ctx.closePath();

    // Desenhar a curva preenchida
    ctx.beginPath();
    ctx.moveTo(0, 220);
    ctx.quadraticCurveTo(200, 50, 500, 100);
    ctx.lineTo(0, 250);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();

    // Desenhar o texto
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';

    ctx.fillText(nome, 20, 50);
    ctx.fillText(br, 20, 75);
    ctx.fillText(faixaEtaria, 20, 95);
    ctx.fillText(tipoPresente, 20, 115);
    ctx.fillText(codigo, 200, 90);
    ctx.fillText(valor, 200, 50);



}

function downloadImage() {
    let canvas = document.getElementById('canvas');
    let url = canvas.toDataURL('image/jpeg');

    let link = document.createElement('a');
    link.href = url;
    link.download = 'imagem.jpg';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
};