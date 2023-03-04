const insertBookingSpot = document.getElementById('livros')
const totalPriceSpot = document.getElementById('valor_total_livros_disponiveis')

function insertingBooks(listaDeLivros) {
    insertBookingSpot.innerHTML = ''
    totalPriceSpot.innerHTML = ''
    listaDeLivros.forEach(livro => {
        const disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        insertBookingSpot.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}"
                alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    })
}
