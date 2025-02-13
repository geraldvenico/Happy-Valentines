
function nextPage() {
    window.location.href = 'yes.html';
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.classList.add('wiggle');
    noButton.addEventListener('animationend', () => {
        noButton.classList.remove('wiggle');
    }, { once: true });

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${noButton.offsetLeft + noButton.offsetWidth / 2}px`;
    heart.style.top = `${noButton.offsetTop + noButton.offsetHeight / 2}px`;
    document.body.appendChild(heart);
    
    heart.addEventListener('animationend', () => {
        heart.remove();
    }, { once: true });
}
