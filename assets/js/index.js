    const button = document.querySelector('.hamburger-lines');
    const menu = document.querySelector('.menu');
    const links = document.querySelectorAll('.link');

    button.addEventListener('click', () => {
        menu.classList.toggle('active');
        button.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            button.classList.remove('active');
        });
    })