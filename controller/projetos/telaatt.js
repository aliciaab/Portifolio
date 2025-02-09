import { atualizarCartao } from "./../../../services/cartao/cartoes_services.js";

let id;

let telaCad = document.getElementById('telaAtt');

export function escodeTelaAtt() {
    telaCad.style.right = '-100vw';
}

export function mostraTelaAtt(i) {
    id = i;

    // Fazer uma requisição GET para obter todos os cartões
    fetch('https://back-end-portifolio-beta.vercel.app/cartoes')
        .then((response) => response.json())
        .then((data) => {
            // Encontrar o cartão correspondente ao ID
            const cartao = data.cartoes.find(c => c.id === id);

            // Preencher os campos com os dados do cartão encontrado
            if (cartao) {
                document.getElementById('nomeAtt').value = cartao.nome || '';
                document.getElementById('valorAtt').value = cartao.link || '';
                document.getElementById('descricaoAtt').value = cartao.descricao || '';
            }
        })
        .catch((error) => console.error('Erro ao buscar os cartões:', error));

    // Exibir a tela de atualização
    telaCad.style.right = '0';
}

export function recolheDadosAtt() {
    let nome = document.getElementById('nomeAtt'); 
    let link = document.getElementById('valorAtt'); 
    let descricao = document.getElementById('descricaoAtt');

    atualizarCartao(id, nome.value, link.value, descricao.value);
    escodeTelaAtt();

    console.log(id)

    nome.value = '';
    link.value = '';
    descricao.value = '';
}
