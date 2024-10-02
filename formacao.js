window.onload = function() {
  console.log('JavaScript carregado corretamente!');

  const container = document.getElementById('cardContainer');

  for (let i = 1; i <= 20; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = `Cartão ${i}`;
      container.appendChild(card);
  }
};
