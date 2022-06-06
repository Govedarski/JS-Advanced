// function focusedWithOneListener() {
//     const eventListenerElement = document.querySelector('div');
//
//     eventListenerElement.addEventListener('focusin', (e) => {
//         if (e.target.tagName.toLowerCase() === 'input') {
//             e.target.parentElement.className = 'focused';
//         }
//     });
//     eventListenerElement.addEventListener('focusout', (e) => {
//         if (e.target.tagName.toLowerCase() === 'input') {
//             e.target.parentElement.className = '';
//         }
//     });
// }

function focused() {
    const eventListenerElements = document.querySelectorAll('div div input');

    function focusAddStyle(e) {
            e.target.parentElement.className = 'focused';
    }

    function blurRemoveStyle(e) {
            e.target.parentElement.className = '';
    }

    for (const element of eventListenerElements) {
        element.addEventListener('focus', focusAddStyle);
        element.addEventListener('blur', blurRemoveStyle);
    }
}