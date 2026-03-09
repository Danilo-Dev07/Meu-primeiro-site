
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.btn');
    if (!switcher) {
        console.warn('Botão .btn não encontrado.');
        return;
    }

    const updateText = () => {
        const isDark = document.body.classList.contains('dark-theme');
        switcher.textContent = isDark ? 'Light' : 'Dark';
    };

    switcher.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        updateText();
    });

    updateText();
});