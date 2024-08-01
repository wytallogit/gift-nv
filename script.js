function carregar() {
    const nome = document.getElementById('nome');
    const br = document.getElementById('br');
    const tipoPresente = document.getElementById('tipo-presente');
    const canvas = document.getElementById('gift');
    let ctx = canvas.getContext('2d');

    ctx.font = '14px serif';
    ctx.fillText(nome.value, 10, 50);

}
