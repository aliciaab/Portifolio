import { cadastrarCartao } from "./../../../services/cartao/cartoes_services.js";

// Corrija o ID para "tela-cadastro"
let telaCad = document.getElementById("tela-cadastro");

export function escondeTelacad() {
    telaCad.style.left = "-100vw";
}

export function mostraTelacad() {
    telaCad.style.left = "0";
}

export function recolherDados() {
    
    let nome = document.getElementById("input-nome");
    let valor = document.getElementById("input-valor");
    let link = document.getElementById("input-descricao");

    if (nome.valor === '') {
        alert("nome em branco");
    } else {
        cadastrarCartao(nome.value, link.value, descricao.value);
        escondeTelacad();

        nome.value = '';
        link.value = '';
        descricao.value = '';
    }

}
