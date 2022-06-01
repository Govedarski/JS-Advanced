function encodeAndDecodeMessages() {
    const textInputElement = document.querySelector('div:first-of-type textarea');
    const textOutputElement = document.querySelector('div:nth-of-type(2) textarea');

    const buttonEncodeElement = textInputElement.nextElementSibling;
    const buttonDecodeElement = textOutputElement.nextElementSibling;

    buttonEncodeElement.addEventListener('click', () => {
        textOutputElement.value = textInputElement.value
            .replace(/./g, char => String.fromCharCode(char.charCodeAt() + 1));
        textInputElement.value = '';
    });

    buttonDecodeElement.addEventListener('click', () => {
        textOutputElement.value = textOutputElement.value
            .replace(/./g, char => String.fromCharCode(char.charCodeAt() - 1));
    });
}