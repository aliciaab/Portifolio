let banners = document.getElementById('banners');

export function trocarBanner(numerobanner) {
    console.log('Banner:', numerobanner);
    banners.style.left = `-${numerobanner * 100}vw`;
}
