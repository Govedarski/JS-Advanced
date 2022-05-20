function solve() {
    let number = Number(arguments[0]);
    for (let i = 1; i < arguments.length; i++) {
        let command = arguments[i];
        switch (command) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= 0.2 * number;
                break;
        }
        console.log(number);
    }
}