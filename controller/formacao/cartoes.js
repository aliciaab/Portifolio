// URL do seu back-end
const baseUrl = 'http://localhost:3000/cartoes';

// Função para buscar cartões do back-end
export async function buscarCartoes() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar os cartões');
        }
        const cartoes = await response.json();
        // Após buscar os cartões, eles são passados para criarCartoes
        criarCartoes(cartoes); 
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para criar cartões
export function criarCartoes(cartoes) {
    console.log('Função criarCartoes chamada'); // Mensagem de verificação

    // Limpa a seção de cartões antes de adicionar novos
    const sectionCartoes = document.createElement('div');
    sectionCartoes.className = 'container'; // Adiciona a classe 'container'

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

// Chama a função quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    buscarCartoes();   // Chama a função para buscar cartões do back-end
});
