function generateReport() {

    const thInput = Array.from(document.querySelectorAll('thead input'));
    const keys = {};
    thInput.forEach((x, i) => {
        if (x.checked) {
            keys[x.name] = i;
        }
    });

    let result = [];

    const rows = Array.from(document.querySelectorAll('tbody tr'));

    for (const row of rows) {
        const td = Array.from(row.children);
        let currentObj = Object.fromEntries(Object.entries(keys).map(kvp => [kvp[0], td[kvp[1]].textContent]));
        result.push(currentObj);
    }

    document.getElementById('output').textContent = JSON.stringify(result);
}