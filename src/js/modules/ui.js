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
}