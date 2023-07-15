// type cardDeck = {
//      cards: string[];
//      suits: string[];
//      ranks: string[];
// }
var CardDeck = /** @class */ (function () {
    function CardDeck() {
        this.cards = [];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.generateCards();
    }
    CardDeck.prototype.generateCards = function () {
        for (var _i = 0, _a = this.suits; _i < _a.length; _i++) {
            var suit = _a[_i];
            for (var _b = 0, _c = this.ranks; _b < _c.length; _b++) {
                var rank = _c[_b];
                this.cards.push("".concat(rank, " ").concat(suit));
            }
        }
    };
    CardDeck.prototype.shuffle = function () {
        var _a;
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            return _a = [this.cards[j], this.cards[i]], this.cards[i] = _a[0], this.cards[j] = _a[1], _a;
        }
    };
    return CardDeck;
}());
var newCard = new CardDeck();
console.log(newCard);
console.log(newCard.shuffle());
console.log(newCard.shuffle());
console.log(newCard.shuffle());
// console.log(newCard.cards);
