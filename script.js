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
        alert('Preencha todos os campos!')
    } else {
        canvas.style.display = 'block';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.font = '30px Arial';
        ctx.fillText(nome, 20, 40);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'black';
    
        ctx.fillText(`BR055500${br}`, 20, 65);
        ctx.fillText(`${faixaEtaria} anos`, 20, 85);
    
        ctx.textAlign = 'right';
        ctx.fillText(`R$${Math.ceil(valor)},00`, 480, 40);
        ctx.fillText(`Gl - ${codigo}`, 480, 65);
        ctx.fillText(tipoPresente, 480, 75);
    
        ctx.textAlign = 'center';
        ctx.font = '12px Arial';
        ctx.fillText(`KDM | Mesquita | Parnaíba importados | Shop Brasil | Casa Araújo & Kids | Avistão`, 250, 220);
    }

}