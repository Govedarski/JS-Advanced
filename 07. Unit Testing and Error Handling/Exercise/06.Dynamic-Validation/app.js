function validate() {
    const inputField = document.getElementById('email');

    function emailValidate(e) {
        const VALIDATING_REGEX = new RegExp('^[a-z]+@[a-z]+.[a-z]+$', 'g');
        VALIDATING_REGEX.test(e.target.value)
            ? e.target.classList.remove('error')
            : e.target.classList.add('error');
    }

    inputField.addEventListener('change', emailValidate);
}