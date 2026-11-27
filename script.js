
const card = document.getElementById('card');
const cardCover = document.getElementById('cardCover');
const openButton = document.getElementById('openButton');

// Открытие письма
function openLetter() {
    card.classList.add('opened');
    openButton.textContent = 'Письмо открыто ❤️';
    openButton.disabled = true;
}

cardCover.addEventListener('click', openLetter);
openButton.addEventListener('click', openLetter);

// Создание падающих лепестков
const petalsContainer = document.getElementById('petals');

const flowers = ['🌸', '🌷', '🌺', '💕', '✨'];

function createPetal() {
    const petal = document.createElement('div');

    petal.classList.add('petal');

    petal.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (12 + Math.random() * 18) + 'px';
    petal.style.animationDuration = (5 + Math.random() * 8) + 's';

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 13000);
}

setInterval(createPetal, 500);
