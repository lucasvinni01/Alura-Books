const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategorias(categoria)
    console.log(categoria)
    insertingBooks(livrosFiltrados)
    categoria == 'disponivel' ? totalPriceSpot.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)}</span></p>
  </div>` : ''
}

function filtrarPorCategorias(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
