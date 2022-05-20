function solve(x1, y1, x2, y2) {
    let points = [[x1, y1], [x2, y2], [0, 0]];
    let i = 0;
    let j = points.length - 1;
    let firstPoint = points[i];
    let secondPoint = points[j];
    while (j >= 1) {
        while (firstPoint !== secondPoint) {
            let distance = Math.sqrt((secondPoint[0] - firstPoint[0]) ** 2 + (secondPoint[1] - firstPoint[1]) ** 2);
            let isValid = Number.isInteger(distance);
            console.log(`{${firstPoint[0]}, ${firstPoint[1]}} to {${secondPoint[0]}, ${secondPoint[1]}} is ${isValid ? 'valid' : 'invalid'}`);
            firstPoint = points[++i];
        }
        secondPoint = points[--j];
        i = 0;
        firstPoint = points[i];
    }
}