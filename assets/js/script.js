let filtroAtivo = "todas";
let indiceAtual = 0;
const secoesCarousel = document.querySelectorAll("#carousel-dicas .content-dicas");
let intervaloRotacao = null;

function mostrarSecao(index = 0) {
  secoesCarousel.forEach((secao, i) => {
    const categoria = secao.dataset.categoria;
    if (filtroAtivo === "todas") {
      secao.style.display = (i === index) ? "flex" : "none"; // carrossel mostra uma de cada vez
    } else {
      secao.style.display = (categoria === filtroAtivo) ? "flex" : "none"; // mostra só a categoria
    }
  });
}

function proximaSecao() {
  if (filtroAtivo !== "todas") return;
  indiceAtual = (indiceAtual + 1) % secoesCarousel.length;
  mostrarSecao(indiceAtual);
}

function filtrarCategoria(categoria) {
  filtroAtivo = categoria;
  clearInterval(intervaloRotacao);

  if (filtroAtivo === "todas") {
    mostrarSecao(indiceAtual); // mostra uma dica (carrossel)
    iniciarCarrossel();
  } else {
    mostrarSecao(); // mostra apenas a categoria selecionada
  }
}

function iniciarCarrossel() {
  intervaloRotacao = setInterval(proximaSecao, 5000);
}

// Inicialização
mostrarSecao(indiceAtual);
iniciarCarrossel();
