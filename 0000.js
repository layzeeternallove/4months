document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos que possuem a classe .reveal
    const reveals = document.querySelectorAll('.reveal');

    // Configura o observador
    const revealOptions = {
        threshold: 0.15, // Dispara quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de tocar o fundo da tela
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Adiciona a classe que engatilha o CSS
                entry.target.classList.add('active');
                
                // Opcional: Parar de observar após animar uma vez (melhora performance)
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Aplica o observador a cada elemento
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});