function gerar() {
    const nome = document.getElementById('nome');
    const br = document.getElementById('br');
    const tipoPresente = document.getElementById('tipo-presente');
    const canvas = document.getElementById('gift');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);

}
