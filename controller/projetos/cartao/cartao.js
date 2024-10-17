import { criarCartoes } from "./../../../view/js/cartao/cartoes_view.js";
import { escondeTelacad } from "./telacad.js";
import { recolherDados } from "./telacad.js";
import { escodeTelaAtt } from "./telaatt.js";
import { recolheDadosAtt } from "./telaatt.js";

window.escondeTelacad = escondeTelacad;
window.recolherDados = recolherDados;
window.escodeTelaAtt = escodeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

document.addEventListener("DOMContentLoaded", function () {
  criarCartoes();
});