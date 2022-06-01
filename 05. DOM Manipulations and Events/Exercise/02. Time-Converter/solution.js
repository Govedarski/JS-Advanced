function attachEventsListeners() {
    for (const div of document.querySelectorAll('div')) {
        div.addEventListener('click', convertEvent);
    }

    function convertEvent(e) {
        const [input, button] = e.currentTarget.querySelectorAll('input');
        if (e.target !== button) {
            return;
        }

        const convertFrom = input.id;
        const value = Number(input.value);
        const result = converting(convertFrom, value);

        for (const key in result) {
            document.getElementById(key).value = result[key];
        }
    }

    function converting(convertFrom, value) {
        const result = {
            days: NaN,
            hours: NaN,
            minutes: NaN,
            seconds: NaN,
        };
        result[convertFrom] = value;
        while (Object.values(result).includes(NaN)) {
            result.days = isNaN(result.days) ? result.hours / 24 : result.days;
            result.hours = isNaN(result.hours) ? result.minutes / 60 : result.hours;
            result.hours = isNaN(result.hours) ? result.days * 24 : result.hours;
            result.minutes = isNaN(result.minutes) ? result.seconds / 60 : result.minutes;
            result.minutes = isNaN(result.minutes) ? result.hours * 60 : result.minutes;
            result.seconds = isNaN(result.seconds) ? result.minutes * 60 : result.seconds;
        }
        return result;
    }
}

function simplerAttachEventsListeners() {
    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let daysButtonElement = document.getElementById('daysBtn');
    let hoursButtonElement = document.getElementById('hoursBtn');
    let minutesButtonElement = document.getElementById('minutesBtn');
    let secondsButtonElement = document.getElementById('secondsBtn');


    daysButtonElement.addEventListener('click', () => {
        let days = Number(daysInputElement.value);
        hoursInputElement.value = days * 24;
        minutesInputElement.value = days * 60 * 24;
        secondsInputElement.value = days * 60 * 60 * 24;
    });

    hoursButtonElement.addEventListener('click', () => {
        let hours = Number(hoursInputElement.value);
        daysInputElement.value = hours / 24;
        minutesInputElement.value = hours * 60;
        secondsInputElement.value = hours * 60 * 60;
    });

    minutesButtonElement.addEventListener('click', () => {
        let minutes = Number(minutesInputElement.value);
        hoursInputElement.value = minutes / 60;
        daysInputElement.value = minutes / 60 / 24;
        secondsInputElement.value = minutes * 60;
    });

    secondsButtonElement.addEventListener('click', () => {
        let seconds = Number(secondsInputElement.value);
        hoursInputElement.value = seconds / 3600;
        minutesInputElement.value = seconds / 60;
        daysInputElement.value = seconds / 60 / 60 / 24;
    });


}
