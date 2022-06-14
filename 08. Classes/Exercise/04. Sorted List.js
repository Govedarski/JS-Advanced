class MyList {
    #numbers = [];

    get size() {
        return this.#numbers.length;
    }

    add(element) {
        this.#numbers.push(element);
        this.#numbers.sort((a, b) => a - b);
    }

    remove(index) {
        if (!this.#isValidateIndex(index)) return;
        this.#numbers.splice(index, 1);
    }

    get(index) {
        if (!this.#isValidateIndex(index)) return;
        return this.#numbers[index];
    }

    #isValidateIndex(index) {
        return index >= 0 && index < this.#numbers.length;
    }
}

class JudgeList {
    #numbers = [];
    size = 0;


    add(element) {
        this.size++;
        this.#numbers.push(element);
        this.#numbers.sort((a, b) => a - b);
    }

    remove(index) {
        if (!this._isValidateIndex(index)) return;
        this.size--;
        this.#numbers.splice(index, 1);
    }

    get(index) {
        if (!this._isValidateIndex(index)) return;
        return this.#numbers[index];
    }

    _isValidateIndex(index) {
        return index >= 0 && index < this.#numbers.length;
    }
}

let myList = new MyList();
let judgeList = new JudgeList();
console.log(myList.add(5) === judgeList.add(5));
console.log(myList.add(6) === judgeList.add(6));
console.log(myList.add(7) === judgeList.add(7));
console.log(myList.get(1) === judgeList.get(1));
console.log(myList.remove(1) === judgeList.remove(1));
console.log(myList.get(1) === judgeList.get(1));
