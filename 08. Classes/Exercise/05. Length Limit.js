class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }


    increase(length) {
        this.innerLength = Math.max(0, (this.innerLength + length));
    }

    decrease(length) {
        this.innerLength = Math.max(0, (this.innerLength - length));
    }

    // toString() {
    //     return this.innerLength < this.innerString.length
    //         ? this.innerString.slice(0, this.innerLength) + '...'
    //         : this.innerString;
    // }

    toString() {
        const ending = this.innerLength < this.innerString.length ? '...' : ''
        return this.innerString.slice(0, this.innerLength) + ending
    }
    //
    // toString() {
    //     return this.innerString.slice(0, this.innerLength) + (this.innerLength < this.innerString.length ? '...' : '')
    // }
}


let test = new Stringer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
