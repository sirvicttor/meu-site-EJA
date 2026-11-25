let cliques = 0;

const valor = document.querySelector("#valor");

function atualizarContador() {
  valor.textContent = cliques;
}

document.querySelector("#adicionar").addEventListener("click", () => {
  cliques += 1;
  atualizarContador();
});

document.querySelector("#diminuir").addEventListener("click", () => {
  cliques -= 1;
  atualizarContador();
});

document.querySelector("#zerar").addEventListener("click", () => {
  cliques = 0;
  atualizarContador();
});
