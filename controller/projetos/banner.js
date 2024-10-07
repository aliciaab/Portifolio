let banners = document.getElementById('banners');

export function trocarBanner(numerobanner) {
    console.log(`Mudando para o banner: ${numerobanner}`); // Para depuração
    banners.style.left = '-' + numerobanner * 100 + 'vw';
}
