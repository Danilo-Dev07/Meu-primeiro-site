'use strict';
// Source - https://stackoverflow.com/q/32405812
// Posted by user2133925
// Retrieved 2026-03-09, License - CC BY-SA 3.0

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