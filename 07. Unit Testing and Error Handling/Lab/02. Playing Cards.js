function cardFactory(face, suit) {
    const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const SUITS = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    if (!(FACES.includes(face)) || !(suit in SUITS)) throw Error('Error');

    return {
        face,
        suit: SUITS[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}

inputs = [
    ['A', 'S'],
    ['10', 'H'],
    ['1', 'S'],
];
for (const input of inputs) {
    let card = cardFactory(...input);
    console.log(card);
}
