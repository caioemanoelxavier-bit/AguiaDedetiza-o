document.addEventListener("DOMContentLoaded", function() {
    // 1. Atualiza automaticamente o ano no rodapé
    const yearElement = document.getElementById('year');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Inicializa os ícones do Lucide (apenas se a biblioteca foi carregada)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn("Lucide Icons não carregou corretamente.");
    }
});