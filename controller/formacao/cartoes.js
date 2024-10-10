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
        criarCartoes(cartoes); // Passa os cartões para a função que os cria na página
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para criar os cartões na página
export function criarCartoes(cartoes) {
    console.log('Função criarCartoes chamada'); // Mensagem de verificação

    // Cria a div dos cartões
    let sectionCartoes = document.createElement('div');
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
    document.getElementById('main-section').appendChild(sectionCartoes);
}
