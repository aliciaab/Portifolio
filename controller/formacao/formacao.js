import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";
import { escondeTelacad } from "./telacad.js";
import { recolherDados } from "./telacad.js";

window.escondeTelacad = escondeTelacad;
window.recolherDados = recolherDados;

document.addEventListener("DOMContentLoaded", function () {
  criarCartoes();
});