function draw() {
    const nome = document.getElementById('nome').value;
    const br = document.getElementById('br').value;
    const faixaEtaria = document.getElementById('faixa-etaria').value;
    const tipoPresente = document.getElementById('tipo-presente').value;
    const valor = document.getElementById('valor').value;
    const codigo = document.getElementById('codigo').value;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    

    if (nome.length == 0) {
        alert('Coloque o nome!')
    } else if (br.length != 3) {
        alert('Coloque três números no BR')
    } else if(faixaEtaria == 0 || tipoPresente == 0 || valor == 0 || codigo == 0) {
        alert('Preencha todos os campos!')
    } else {
        canvas.style.display = 'block';

            
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
        
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.quadraticCurveTo(0, 100, 0, 0);
        ctx.lineTo(0, 250);
        ctx.lineTo(500, 250);
        ctx.closePath();
        ctx.fillStyle = '#00A14B';
        ctx.fill();
        
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.fillText(nome, 20, 40);
        ctx.font = '20px Arial';
        
        ctx.fillText(`BR055500${br}`, 20, 65);
        ctx.fillText(`${faixaEtaria} anos`, 20, 85);
        
        ctx.textAlign = 'right';
        ctx.fillText(`R$${Math.ceil(valor)},00`, 480, 35);
        ctx.fillText(`Gl - ${codigo}`, 480, 60);
        ctx.fillText(tipoPresente, 480, 80);
        ctx.textAlign = 'center';
        ctx.font = '12px Arial';
        ctx.fillText(`KDM | Mesquita | Parnaíba importados | Shop Brasil | Casa Araújo & Kids | Avistão`, 250, 220);

        const img = new Image();
        img.src = 'imagens/logo.png';
        img.onload = function() {
            ctx.drawImage(img, 175, 80, 150, 110);
        }
    };

}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const image = canvas.toDataURL('image/png'); // Corrigido para 'image/png'

    const link = document.createElement('a');
    link.href = image;
    link.download = 'gift.png';

    link.click();
}