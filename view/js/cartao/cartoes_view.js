import { buscarCartoes } from "./../../../services/cartao/cartoes_services.js";
import { excluirCartoes } from "./../../../services/cartao/cartoes_services.js";
import { mostraTelacad } from "./../../../controller/projetos/cartao/telacad.js";
import { mostraTelaAtt } from "./../../../controller/projetos/cartao/telaatt.js";


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

  
        let div = document.createElement('div');
        div.style.display = 'flex';
        div.style.width = '100%';
        div.style.justifyContent = 'space-evenly'

        let button = document.createElement('button');
        button.className = 'button_card';
        button.textContent = 'EXCLUIR';
        button.addEventListener('click', ()=>{
            excluirCartoes(i);
        });

        let buttonAtt = document.createElement('button');
        buttonAtt.className = 'button_card';
        buttonAtt.textContent = 'ATT';
        buttonAtt.addEventListener('click', ()=>{
            mostraTelaAtt(i);
        });

        div.appendChild(button);
        div.appendChild(buttonAtt);

        cartao.appendChild(h1);
        cartao.appendChild(h3);
        cartao.appendChild(div);

        sectionCartoes.appendChild(cartao);
    }
    let cartaoAdd = document.createElement('button');
    cartaoAdd.className = 'cartao';
    cartaoAdd.textContent = '+';
    cartaoAdd.addEventListener('click', ()=>{
        mostraTelacad();
    });
    sectionCartoes.appendChild(cartaoAdd);
}