// Seleciona todos os elementos de âncora no menu de navegação
const navLinks = document.querySelectorAll('nav a');

// Seleciona todas as seções do site
const pages = document.querySelectorAll('.page');

// Itera sobre cada âncora no menu de navegação
navLinks.forEach((link, index) => {
    // Adiciona um ouvinte de evento de clique a cada âncora
    link.addEventListener('click', (e) => {
        // Impede o comportamento padrão de navegação do link
        e.preventDefault();

        // Remove a classe 'active' de todas as seções, ocultando-as
        pages.forEach((page) => {
            page.classList.remove('active');
        });

        // Adiciona a classe 'active' apenas à seção correspondente à âncora clicada, tornando-a visível
        pages[index].classList.add('active');
    });
});
