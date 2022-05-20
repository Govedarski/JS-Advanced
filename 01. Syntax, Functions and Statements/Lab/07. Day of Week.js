function solve(day) {
    let toPrint = ''
    switch (day){
        case 'Monday':
            toPrint = '1'
            break
        case 'Tuesday':
            toPrint = '2'
            break
        case 'Wednesday':
            toPrint = '3'
            break
        case 'Thursday':
            toPrint = '4'
            break
        case 'Friday':
            toPrint = '5'
            break
        case 'Saturday':
            toPrint = '6'
            break
        case 'Sunday':
            toPrint = '7'
            break
        default:
            toPrint = 'error'
            break
    }
    console.log(toPrint)
}