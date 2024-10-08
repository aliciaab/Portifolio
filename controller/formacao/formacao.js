// front-end/formacao.js
import { criarCartoes } from './cartoes.js';

document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/api/cartoes')
        .then(response => response.json())
        .then(data => {
            criarCartoes(data);
        })
        .catch(error => console.error('Erro ao buscar os cartões:', error));
});
