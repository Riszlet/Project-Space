const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    if (document.body.classList.contains('dark')) {
        modeToggle.textContent = '☀️ Light Mode';
    } else {
        modeToggle.textContent = '🌙 Dark Mode';
    }
});

// Set default mode
document.body.classList.add('light');
