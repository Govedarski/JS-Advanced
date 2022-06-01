function create(strings) {

    function display(e) {
        e.target.firstChild.style.display = 'inline-block';
    }

    for (const string of strings) {
        const currentPElement = document.createElement('p');
        currentPElement.textContent = string;
        currentPElement.style.display = 'none';

        const currentDivElement = document.createElement('div');
        currentDivElement.appendChild(currentPElement);
        currentDivElement.addEventListener('click', display);

        document.getElementById('content').appendChild(currentDivElement);
    }

}