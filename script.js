// Ativa os ícones do Lucide
lucide.createIcons();

// Atualiza o ano no footer
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Lógica simples para as animações de "Reveal" ao rolar a página
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150; // Quão perto do topo o elemento deve estar para aparecer

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // Opcional: remover a classe se quiser que a animação repita ao subir a página
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// Chama a função uma vez no carregamento para exibir os elementos já visíveis no topo
reveal();