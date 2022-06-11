function cardDeck(array) {
    function cardFactory(face, suit) {
        const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const SUITS = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };

        if (!(FACES.includes(face)) || !(suit in SUITS)) throw face + suit;

        return {
            face,
            suit: SUITS[suit],
            toString() {
                return this.face + this.suit;
            }
        };
    }


    try {
        console.log(array.map(card => {
            const face = card.slice(0, -1);
            const suit = card.slice(-1);
            return cardFactory(face, suit);
        }).join(' '));
    } catch (card) {
        console.log(`Invalid card: ${card}`);
    }
}

cardDeck(['AS', '10D', 'KH', '2C']);
cardDeck(['5S', '3D', 'QD', '1C']);