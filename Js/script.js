document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('industryCardsContainer');
    if (!container) {
        console.error('Industry cards container not found!');
        return;
    }
    const cards = Array.from(container.children);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function shuffleCards() {
        let shuffledCards = [...cards];
        shuffleArray(shuffledCards);

        container.innerHTML = '';
        shuffledCards.forEach(card => {
            container.appendChild(card);
        });
    }

    shuffleCards();
    setInterval(shuffleCards, 3000);
});