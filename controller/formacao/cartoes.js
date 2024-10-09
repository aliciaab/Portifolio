const cartoes = [
  {
    nome: 'nome 1',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 2',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 3',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 4',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 5',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 6',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 7',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 8',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 9',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 10',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 11',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 12',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 13',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 14',
    valor: 'R$88,00',
  },
  {
    nome: 'nome 15',
    valor: 'R$88,00',
  },

]

export function criarCartoes() {
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