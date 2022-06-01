function attachEventsListeners() {
    const CONVERTING_RATE_TO_METER = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    const buttonConvertElement = document.getElementById('convert');
    buttonConvertElement.addEventListener('click', () => {
        const [from, to] = document.querySelectorAll('select');
        const distanceInput = Number(document.getElementById('inputDistance').value);
        const resultOutputElement = document.getElementById('outputDistance');
        resultOutputElement.value = distanceInput * CONVERTING_RATE_TO_METER[from.value] / CONVERTING_RATE_TO_METER[to.value];
    });
}