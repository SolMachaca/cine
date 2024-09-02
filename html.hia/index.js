document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
            if (card.classList.contains('active')) {
                card.style.transform = 'scale(1.1)';
                card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            } else {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }
        });
    });
});
