function solve(steps, meters, kmH) {
    let distance = steps * meters;
    let rests = Math.floor(distance / 500);
    let timeInSeconds = Math.round((distance / 1000 / kmH) * 60 * 60 + rests * 60);
    let seconds = timeInSeconds % 60;
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    let timeInMinutes = (timeInSeconds - seconds) / 60;
    let minutes = timeInMinutes % 60;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    let hours = (timeInMinutes - minutes) / 60;
    hours = hours >= 10 ? hours : '0' + hours;
    console.log(`${hours}:${minutes}:${seconds}`);

}