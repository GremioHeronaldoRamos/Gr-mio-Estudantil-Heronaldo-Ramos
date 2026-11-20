 
const EMAIL = 'gheronaldoramos@gmail.com';

// MENU FLUTUANTE

const pin = document.getElementById('pin');
const menu = document.getElementById('menu');

function alternar(abrir) {
    const aberto = abrir ?? !menu.classList.contains('aberto');

    menu.classList.toggle('aberto', aberto);
    pin.setAttribute('aria-expanded', aberto);
    pin.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

pin.addEventListener('click', () => alternar());

menu.addEventListener('click', e => {
    if (e.target.closest('a')) alternar(false);
});

document.addEventListener('click', e => {
    if (!e.target.closest('#menu, #pin')) alternar(false);
});


// CARROSSEL DE FOTOS E VÍDEOS

function rolarGaleria(direcao) {
    const galeria = document.getElementById('galeria-grade');

    if (!galeria) {
        console.log('Galeria não encontrada!');
        return;
    }

    galeria.scrollBy({
        left: direcao * 350,
        behavior: 'smooth'
    });
}


// AMPLIAÇÃO DE IMAGENS

function abrirImagem(src) {
    const visualizador = document.getElementById('visualizador');
    const imagem = document.getElementById('imagem-ampliada');

    imagem.src = src;
    visualizador.style.display = 'flex';
}

function fecharImagem() {
    document.getElementById('visualizador').style.display = 'none';
}


// CONTROLE DA TECLA ESC

document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {
        alternar(false);

        const visualizador = document.getElementById('visualizador');

        if (visualizador.style.display === 'flex') {
            fecharImagem();
        }
    }

});