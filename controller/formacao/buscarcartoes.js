// URL do seu back-end
const baseUrl = 'http://localhost:3000/cartoes';

// Função para buscar cartões do back-end
export async function buscarCartoes() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar os cartões');
        }
        const cartoes = await response.json();
        return cartoes;
    } catch (error) {
        console.error('Erro:', error);
    }
}
// Chama a função quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    buscarCartoes();   // Chama a função para buscar cartões do back-end
});
