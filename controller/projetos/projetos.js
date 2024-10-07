import { trocarBanner } from "./banner.js";
import { trocarMenu } from "./menu.js";

// Tornando as funções acessíveis no escopo global
window.trocarBanner = trocarBanner;
window.trocarMenu = trocarMenu;

document.addEventListener("DOMContentLoaded", function() {
    // Código a ser executado após o DOM estar totalmente carregado
});