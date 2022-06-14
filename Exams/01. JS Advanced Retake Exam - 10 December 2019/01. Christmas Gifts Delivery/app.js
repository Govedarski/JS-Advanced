function solution() {
    const [divAddGift, ulListOfGifts, ulSentGifts, ulDiscardedGifts] = document.querySelectorAll('section.card > *:last-child');
    const giftNameInputField = document.querySelector('input');

    divAddGift.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() !== 'button' || giftNameInputField.value === '') return;

        const liElement = document.createElement('li');
        const buttonSend = document.createElement('button');
        const buttonDiscard = document.createElement('button');

        liElement.classList.add('gift');
        liElement.textContent = giftNameInputField.value;
        buttonSend.textContent = 'Send';
        buttonDiscard.textContent = 'Discard';
        buttonSend.id = 'sendButton';
        buttonDiscard.id = 'discardButton';

        buttonSend.addEventListener('click', ()=>{
            ulSentGifts.appendChild(liElement)
            buttonSend.remove()
            buttonDiscard.remove()
        })

        buttonDiscard.addEventListener('click', ()=>{
            ulDiscardedGifts.appendChild(liElement)
            buttonSend.remove()
            buttonDiscard.remove()
        })

        liElement.appendChild(buttonSend);
        liElement.appendChild(buttonDiscard);
        ulListOfGifts.appendChild(liElement);

        giftNameInputField.value = '';

        Array.from(ulListOfGifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => ulListOfGifts.appendChild(x));
    });


}