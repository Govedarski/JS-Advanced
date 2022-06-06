function solve() {
    function onScreen(e) {
        e.preventDefault();
        const movieInputElements = document.querySelectorAll('#container input');
        const data = Array.from(movieInputElements)
            .map(x => x.value);
        if (data.some(x => !x.length) || isNaN(Number(data[2]))) return;
        for (const input of movieInputElements) input.value = '';
        const [name, hall, price] = data;
        document.querySelector('#movies ul').innerHTML +=
            `<li>
               <span>${name}</span>
               <strong>Hall: ${hall}</strong>
               <div>
                    <strong>${Number(price).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button>Archive</button>
               </div>
            </li>`;
    }
    document.querySelector('#container button').addEventListener('click', onScreen);

    function archive(e) {
        e.preventDefault();
        const liElement = e.target.parentElement.parentElement;
        const soldTickets = liElement.querySelector('input').value;
        if (e.target.tagName.toLowerCase() !== 'button' || soldTickets.length === 0 || isNaN(Number(soldTickets))) return;
        const buttonElement = liElement.querySelector('button');
        const divToDelete = liElement.querySelector('div');
        const sellsIncome = Number(soldTickets) * Number(liElement.querySelector('div strong').textContent);
        buttonElement.textContent = 'Delete';
        liElement.removeChild(divToDelete);
        liElement.appendChild(buttonElement);
        liElement.querySelector('strong').textContent = `Total amount: ${sellsIncome.toFixed(2)}`;
        document.querySelector('#archive ul').appendChild(liElement);
    }

    document.getElementById('movies').addEventListener('click', archive);

    function deleting(e) {
        e.preventDefault();
        if (e.target.tagName.toLowerCase() === 'button') e.target.parentElement.remove();
    }
    document.querySelector('#archive ul').addEventListener('click', deleting);

    function deleteAll(e) {
        e.preventDefault();
        e.currentTarget.previousElementSibling.innerHTML = ''   }
    document.querySelector('#archive > button').addEventListener('click', deleteAll)
}