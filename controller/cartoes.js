export function criarCartoes() {
    console.log('Função criarCartoes chamada'); // Mensagem de verificação
    
    // Cria a div dos cartões
    let sectionCartoes = document.createElement('div');
    sectionCartoes.className = 'container'; // Adiciona a classe 'container'
    
    for (let i = 0; i < 20; i++) {
      let cartao = document.createElement('div');
      cartao.className = 'card'; // A classe deve corresponder ao seu CSS
  
      let h1 = document.createElement('h1');
      h1.textContent = `Nome ${i + 1}`; // Nome do cartão
  
      let h3 = document.createElement('h3');
      h3.textContent = 'R$88,00'; // Valor do cartão
  
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