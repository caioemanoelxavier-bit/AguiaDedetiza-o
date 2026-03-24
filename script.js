document.addEventListener("DOMContentLoaded", function() {
    // 1. Atualiza automaticamente o ano no rodapé
    const yearElement = document.getElementById('year');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Inicializa os ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn("Lucide Icons não carregou corretamente.");
    }

    // 3. Lógica de Animação de Rolagem (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Dispara quando 15% do elemento está visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de tocar o final da tela
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Opcional: faz a animação acontecer apenas uma vez
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});