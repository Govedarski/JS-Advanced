function solve(text){
    let regex = /(\w+)/g
    let matches = text.match(regex)
    matches = matches.map(word => word.toUpperCase())
    console.log(matches.join(', '))
}