function lockedProfile() {
    const BUTTON_SHOW_TITLE = 'Show more';
    const BUTTON_HIDE_TITLE = 'Hide it';
    const divs = document.querySelectorAll('div.profile');
    for (const div of divs) {
        div.addEventListener('click', (e) => {
            const buttonShowHideElement = e.currentTarget.querySelector('button');
            const lock = e.currentTarget.querySelector('input[value=lock]').checked;
            if (buttonShowHideElement !== e.target || lock) {
                return;
            }

            buttonShowHideElement.textContent = buttonShowHideElement.textContent === BUTTON_SHOW_TITLE
                ? BUTTON_HIDE_TITLE
                : BUTTON_SHOW_TITLE;

            const infoDivElement = e.currentTarget.querySelector('div');
            infoDivElement.style.display = infoDivElement.style.display === 'inline-block' ? 'none' : 'inline-block';
        });
    }
}