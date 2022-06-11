function validate() {
    const submitButton = document.getElementById('submit');
    const [username, email, password, passwordConfirm, isCompany, companyNumber] = document.querySelectorAll('input');
    const validDiv = document.getElementById('valid');
    const companyInfoFieldset = document.getElementById('companyInfo');
    let showValidDiv = [];

    function isValid(input, regex) {
        const lastIndex = showValidDiv.push(regex.test(input)) - 1;
        return showValidDiv[lastIndex];
    }

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        isValid(username.value, /^[a-zA-Z\d]{3,20}$/) ? username.style.border = '' : username.style.borderColor = 'red';
        isValid(email.value, /@.*\./) ? email.style.border = '' : email.style.borderColor = 'red';
        if (isValid(password.value, /^\w{5,15}$/) && password.value === passwordConfirm.value) {
            password.style.border = '';
            passwordConfirm.style.border = '';
            showValidDiv.push(true)
        } else {
            password.style.borderColor = 'red';
            passwordConfirm.style.borderColor = 'red';
            showValidDiv.push(false)
        }
        if (isCompany.checked) {
            isValid(companyNumber.value, /^\d{4}$/) ? companyNumber.style.border = '' : companyNumber.style.borderColor = 'red';
        }
        showValidDiv.some(x => !x) ? validDiv.style.display = 'none' : validDiv.style.display = 'block';
        showValidDiv = [];
    });

    isCompany.addEventListener('change', () => {
        if (isCompany.checked) {
            companyInfoFieldset.style.display = 'block';
        } else {
            companyInfoFieldset.style.display = 'none';
        }
    });
}
