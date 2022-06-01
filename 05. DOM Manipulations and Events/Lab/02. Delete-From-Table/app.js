function deleteByEmail() {
    const emailToDelete = document.querySelector('input[name="email"]');
    const emailElements = document.querySelectorAll('tbody tr td:nth-child(2)');
    let result = 'Not found.';

    for (const email of emailElements) {
        if (email.textContent !== emailToDelete.value) {
            continue;
        }
        result = 'Deleted.';
        email.parentElement.remove();
    }
    document.getElementById('result').textContent = result;
}a