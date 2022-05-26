function solve(pie, firstFlavor, lastFlavor) {
    let startIndex = pie.indexOf(firstFlavor);
    let endIndex = pie.indexOf(lastFlavor);
    return pie.slice(startIndex, endIndex + 1);
}

console.log(solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));
console.log(solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'));