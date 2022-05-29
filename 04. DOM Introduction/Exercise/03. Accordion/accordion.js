function toggle() {
    const button = document.querySelector('span.button');
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
    const textToShowHide = document.getElementById('extra');
    textToShowHide.style.display = textToShowHide.style.display === 'block' ? 'none' : 'block';
}