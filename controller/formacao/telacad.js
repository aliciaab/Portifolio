import { cadastrarCartao } from "../../services/formacao/cartoes_services.js";

// Corrija o ID para "tela-cadastro"
let telaCad = document.getElementById("tela-cadastro");

export function escondeTelacad() {
    telaCad.style.left = "-100vw";
}

export function mostraTelacad() {
    telaCad.style.left = "0";
}

export function recolherDados() {
    // Corrija os IDs para "input-nome" e "input-valor"
    let nome = document.getElementById("input-nome");
    let valor = document.getElementById("input-valor");

    if (nome && valor) {
        cadastrarCartao(nome.value, valor.value);
        escondeTelacad();

        nome.value = '';
        valor.value = '';
    } else {
        console.error("Campos 'nome' e 'valor' não encontrados.");
    }
}
