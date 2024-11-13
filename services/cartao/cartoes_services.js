import { criarCartoes } from "../../view/js/cartao/cartoes_view.js";

export async function buscarCartoes() {
    try {
        const response = await fetch('https://back-end-portifolio-beta.vercel.app/cartoes');
        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluirCartoes(index) {
    try {
        const response = await fetch('https://back-end-portifolio-beta.vercel.app/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function cadastrarCartao(nome, link, descricao) {
    try {
        const response = await fetch('https://back-end-portifolio-beta.vercel.app/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                link: link,
                descricao: descricao,
                
            }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, link, descricao) {
    try {
        const response = await fetch('https://back-end-portifolio-beta.vercel.app/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                link: link,
                id: id,
                descricao: descricao,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}