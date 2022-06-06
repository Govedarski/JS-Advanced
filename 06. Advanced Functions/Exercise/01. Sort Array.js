function sorting(array, order) {
    return array.sort((a, b) => order === 'asc' ? a - b : b - a);
}

[sorting([14, 7, 17, 6, 8], 'asc'),
    sorting([14, 7, 17, 6, 8], 'desc'
    )].forEach(x => console.log(x));