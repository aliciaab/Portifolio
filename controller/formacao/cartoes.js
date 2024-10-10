import { buscarCartoes } from "./buscarcartoes.js";


export async function criarCartoes() {
    console.log('Função criarCartoes chamada'); // Mensagem de verificação

    // Limpa a seção de cartões antes de adicionar novos
    const sectionCartoes = document.createElement('div');
    sectionCartoes.className = 'container'; // Adiciona a classe 'container'

    const cartoes = await buscarCartoes()

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'card'; // A classe deve corresponder ao seu CSS

        let h1 = document.createElement('h1');
        h1.textContent = cartoes[i].nome; // Nome do cartão

        let h3 = document.createElement('h3');
        h3.textContent = cartoes[i].valor; // Valor do cartão

        let p = document.createElement('p');
        p.textContent = 'Sobre...'; // Descrição

        cartao.appendChild(h1);
        cartao.appendChild(h3);
        cartao.appendChild(p);
        sectionCartoes.appendChild(cartao); // Adicionando o cartão à seção
    }

    // Adiciona a div dos cartões à seção principal do HTML
    document.getElementById('main-section').innerHTML = ''; // Limpa cartões antigos
    document.getElementById('main-section').appendChild(sectionCartoes);
}

