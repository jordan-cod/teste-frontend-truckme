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
});


function showError(input, message) {
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.classList.add('invalid');
}

function showStatusMessage(message, type) {
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = message;
    statusMessage.classList.remove('error', 'success');
    statusMessage.classList.add(type);

    setTimeout(() => {
        statusMessage.textContent = '';
        statusMessage.classList.remove(type);
    }, 5000);
}

function removeErrorMessages() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());

    const invalidInputs = document.querySelectorAll('.invalid');
    invalidInputs.forEach(input => input.classList.remove('invalid'));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const button = document.getElementById('submit');
    let isValid = true;

    removeErrorMessages();

    if (name.value.trim() === ''){
        showError(name, 'Por favor, insira seu nome.');
        isValid = false;
    } else if (name.value.length > 100) {
        showError(name, 'O nome deve ter no máximo 100 caracteres.');
        isValid = false;
    }
    if (email.value.trim() === ''){
        showError(email, 'Por favor, insira seu email.');
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Por favor, insira um email válido.');
        isValid = false;
    } else if (email.value.length > 100) {
        showError(email, 'O email deve ter no máximo 100 caracteres.');
        isValid = false;
    }
    if (message.value.trim() === ''){
        showError(message, 'Por favor, insira uma mensagem.');
        isValid = false;
    } else if (message.value.length > 255) {
        showError(message, 'A mensagem deve ter no máximo 255 caracteres.');
        isValid = false;
    } 

    if (isValid) {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        
        button.innerHTML = 'Enviando...'
        button.disabled = true;
        button.classList.add('disabled')
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: name.value + email.value,
                body: message.value,
                userId: 1
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar mensagem.');
            }
        })
        .then(data => {
            document.getElementById('contact-form').reset();

            showStatusMessage('Mensagem enviada com sucesso!', 'success');
        })
        .catch(error => {
            console.error('Erro:', error);

            showStatusMessage('Erro ao enviar mensagem. Tente novamente mais tarde.', 'error');
        })
        .finally(() => {
            button.innerHTML = 'Enviar';
            button.disabled = false;
            button.classList.remove('disabled');
        })
    }
});


const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
    
let currentIndex = 0;
const totalItems = carouselItems.length;
const itemWidth = carousel.offsetWidth;

function goToSlide(index) {
    if (index < 0 || index >= totalItems) return;

    currentIndex = index;
    const translateValue = -currentIndex * itemWidth;
    carouselInner.style.transform = `translateX(${translateValue}px)`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);