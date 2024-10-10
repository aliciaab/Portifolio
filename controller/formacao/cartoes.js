const cartoes = [
  { nome: 'Produto A', valor: 'R$45,00' },
  { nome: 'Produto B', valor: 'R$59,99' },
  { nome: 'Produto C', valor: 'R$30,50' },
  { nome: 'Produto D', valor: 'R$99,99' },
  { nome: 'Produto E', valor: 'R$25,00' },
  { nome: 'Produto F', valor: 'R$150,00' },
  { nome: 'Produto G', valor: 'R$75,75' },
  { nome: 'Produto H', valor: 'R$88,88' },
  { nome: 'Produto I', valor: 'R$120,00' },
  { nome: 'Produto J', valor: 'R$50,50' },
  { nome: 'Produto K', valor: 'R$200,00' },
  { nome: 'Produto L', valor: 'R$65,99' },
  { nome: 'Produto M', valor: 'R$32,40' },
  { nome: 'Produto N', valor: 'R$78,60' },
  { nome: 'Produto O', valor: 'R$33,33' },
];

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