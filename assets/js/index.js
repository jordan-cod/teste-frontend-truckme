document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.hamburger-lines');
    const menu = document.querySelector('.menu');

    button.addEventListener('click', () => {
        menu.classList.toggle('active');
        button.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});