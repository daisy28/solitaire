var deltCardsDiv = document.querySelector("#delt-card-div");
var hiddenCardsDiv = document.querySelector("#hidden-card-div");
var CardDeck = /** @class */ (function () {
    function CardDeck() {
        this.cards = [];
        this.deltCards = [];
        this.hiddenCards = [];
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
    CardDeck.prototype.shuffleCard = function () {
        packOfCards.cards.sort(function () { return Math.random() - 0.5; });
        return this;
    };
    CardDeck.prototype.dealDeltCards = function () {
        this.deltCards.push(packOfCards.cards.slice(0, 28));
        return this;
    };
    CardDeck.prototype.dealHiddenCards = function () {
        this.hiddenCards.push(packOfCards.cards.slice(28, 52));
        return this;
    };
    return CardDeck;
}());
var packOfCards = new CardDeck();
packOfCards.shuffleCard().dealDeltCards().dealHiddenCards();
console.log(packOfCards);
var renderCard = function () {
    var deltCardTemplate = "";
    var hiddenCardTemplate = "";
    packOfCards.deltCards[0].map(function (card) {
        deltCardTemplate += "<div draggable=\"true\" class=\"cards\">".concat(card, "</div>");
    });
    packOfCards.hiddenCards[0].map(function (card) {
        hiddenCardTemplate += "<div class=\"cards\">".concat(card, "</div>");
    });
    var a, b;
    var position = "";
    for (a = 1; a <= 8; a++) {
        for (b = 1; b < a; b++) {
            position = deltCardTemplate;
        }
        deltCardsDiv.innerHTML = position;
        position = "";
    }
    // console.log(deltCardTemplate)
    // hiddenCardsDiv.innerHTML = hiddenCardTemplate;
    // // moveCards(deltCardsDiv);
    // Array.from(deltCardsDiv.children).forEach(card => {
    //      card.addEventListener("click", () => {
    //           console.log("clicked")
    //      })
    // })
};
renderCard();
