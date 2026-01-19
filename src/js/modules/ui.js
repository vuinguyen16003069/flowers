// UI Module for handling user interactions
export function initUI() {
    // Restart button
    const restartBtn = document.getElementById('restart');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            location.reload();
        });
    }

    // Toggle mode button
    const toggleBtn = document.getElementById('toggle-mode');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('day');
            toggleBtn.textContent = document.body.classList.contains('day') ? 'Night Mode' : 'Day Mode';
        });
    }

    // Flower click effect
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            flower.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                flower.style.animation = '';
            }, 600);
        });
    });
}