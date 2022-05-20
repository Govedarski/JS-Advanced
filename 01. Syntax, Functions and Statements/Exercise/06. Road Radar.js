function solve(speed, zone) {
    let limits = {
        'motorway':130,
        'interstate':90,
        'city':50,
        'residential':20
    }
    let speedOver = speed - limits[zone]
    let status = ''

    if(speedOver >0 && speedOver <= 20){
        status = 'speeding'
    }else if(speedOver >0 && speedOver <= 40){
        status = 'excessive speeding'
    }else if(speedOver > 40){
        status = 'reckless driving'
    }

    console.log(status
        ? `The speed is ${speedOver} km/h faster than the allowed speed of ${limits[zone]} - ${status}`
        : `Driving ${speed} km/h in a ${limits[zone]} zone`)
}

