function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchInput = document.getElementById('searchField');
        const criteria = searchInput.value;
        searchInput.value = '';
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        p=1
        for (const row of rows) {
            let klass = '';
            for (const td of Array.from(row.children)) {
                if (td.textContent.includes(criteria)) {
                    klass = 'select';
                    break;
                }
            }
            row.className = klass;
        }
    }

}

// function solve() {
//     document.querySelector('#searchBtn').addEventListener('click', onClick);
//
//     function onClick() {
//         const searchInput = document.getElementById('searchField');
//         const criteria = searchInput.value;
//         searchInput.value = '';
//         const rows = Array.from(document.querySelectorAll('tbody tr'));
//         rows.forEach(
//             row => Array.from(row.children).some(td => td.textContent.includes(criteria))
//                 ? row.className = 'select'
//                 : row.className = '');
//     }
// }