const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

let noClickCount = 0;

noButton.addEventListener('click', function () {
    noClickCount++;

    // Make No button smaller
    const newNoSize = Math.max(0.4, 1 - (noClickCount * 0.15));
    noButton.style.transform = `scale(${newNoSize})`;

    // Make Yes button bigger
    const newYesSize = 1 + (noClickCount * 0.2);
    yesButton.style.transform = `scale(${newYesSize})`;

    // Optional: Make No button harder to click
    if (noClickCount > 3) {
        noButton.style.position = 'absolute';
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        noButton.style.left = `calc(50% + ${randomX}px)`;
        noButton.style.top = `calc(50% + ${randomY}px)`;
    }
});

yesButton.addEventListener('click', function () {
  createHearts();
  setTimeout(() => {
    window.location.href = 'Yes.html';
  }, 1000);
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.animation = 'floatUp 3s ease-out forwards';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10000';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}