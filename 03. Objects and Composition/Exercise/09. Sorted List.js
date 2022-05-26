function createSortedList() {
    return {
        numbers: [],
        add(element) {
            this.numbers.push(element);
            this.numbers.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index <= this.size - 1) {
                this.numbers.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index <= this.size - 1)
                return this.numbers[index];
        },
        get size() {
            return this.numbers.length;
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);