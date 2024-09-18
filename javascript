document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Thank you for getting started with us!');
    });

    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        stat.style.animation = 'grow 1.5s ease-in-out';
    });
});
