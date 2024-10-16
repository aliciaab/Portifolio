import { criarCartoes } from "../../view/js/formacao/cartoes_view.js";
export async function buscarCartoes() {
    try {
        const response = await fetch('http://localhost:3000/cartoes');

        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
    } catch (e) {
        console.error(e)
    }
}
export async function excluirCartoes(index) {
    try {
        const response = await fetch(`http://localhost:3000/cartoes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),

        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}
export async function cadastrarCartao(nome, valor) {
    try {
        const response = await fetch(`http://localhost:3000/cartoes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                id: id,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log('Erro:', e);
    }
}


export async function atualizarCartao(id, nome, valor) {
    try {
        const response = await fetch(`http://localhost:3000/cartoes/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                id: id,
            }),
        });

    } catch (e) {
        console.log('Erro:', e);
    }
}
