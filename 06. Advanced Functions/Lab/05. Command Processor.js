function solution() {
    let context = '';

    function append(string) {
        context += string
    }

    function removeStart(num) {
        context = context.substring(num)
    }

    function removeEnd(num) {
        context = context.substring(0, context.length - num)
    }

    function print() {
        console.log(context);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}


let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.print()
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();