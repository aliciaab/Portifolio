import { buscarCartoes } from "../../../services/formacao/cartoes_services.js";
import { excluirCartoes } from "../../../services/formacao/cartoes_services.js";
import { mostraTelacad } from "../../../controller/formacao/telacad.js"

export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');
    sectionCartoes.innerHTML = ''; // Limpa a seção antes de adicionar os cartões

    const cartoes = await buscarCartoes(); // Busca os cartões corretamente

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao';

        let h1 = document.createElement('h1');
        h1.textContent = cartoes[i].nome; 

        let h3 = document.createElement('h3');
        h3.textContent = cartoes[i].valor;

        let button = document.createElement('button');
        button.className = 'button_card';
        button.textContent = 'EXCLUIR';
        button.addEventListener('click', () => {
            excluirCartoes(i); // Corrigido para pegar o id correto
        });

        // Adiciona os elementos criados ao cartão
        cartao.appendChild(h1);
        cartao.appendChild(h3);
        cartao.appendChild(button);

        // Adiciona o cartão à seção
        sectionCartoes.appendChild(cartao);
    }

    // Botão para adicionar novo cartão
    let cartaoAdd = document.createElement('button');
    cartaoAdd.className = 'cartao';
    cartaoAdd.textContent = '+';
    cartaoAdd.addEventListener('click', () => {
        mostraTelacad();
    });

    sectionCartoes.appendChild(cartaoAdd); // Adiciona o botão de adicionar cartão
}
