import { atualizarCartao } from "../../services/cartao/cartoes_services.js";

let id;

let telaCad = document.getElementById('telaAtt');
export function escodeTelaAtt(){
    telaCad.style.right = '-100vw';
}
export function mostraTelaAtt(i){
    id = i;
    telaCad.style.right = '0';
}

export function recolheDadosAtt(){
       let nome = document.getElementById('nomeAtt'); 
       let valor = document.getElementById('valorAtt'); 

       atualizarCartao(id, nome.value, valor.value);
       escodeTelaAtt();

       console.log(id)

       nome.value = '';
       valor.value = '';
}