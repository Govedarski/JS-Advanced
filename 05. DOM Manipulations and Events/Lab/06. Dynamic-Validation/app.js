function validate() {
    const EMAIL_VALIDATION_ERROR_CLASS = 'error';
    const EMAIL_VALIDATION_PASS_CLASS = '';
    const REGEX_VALIDATION = /^\S+@\S+\.\S+$/g;

    const emailElement = document.getElementById('email');

    emailElement.addEventListener('change', e => {
        const mailInput = e.target.value;
        e.target.className = EMAIL_VALIDATION_PASS_CLASS;

        if (!mailInput.match(REGEX_VALIDATION)) {
            e.target.className = EMAIL_VALIDATION_ERROR_CLASS;
        }
    });
}