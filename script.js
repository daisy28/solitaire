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
var deltCard = function () {
    var cards = "";
    packOfCards.deltCards[0].map(function (card) {
        cards += card;
    });
    return cards;
};
// console.log(deltCard())
var renderCard = function () {
    var hiddenCardTemplate = "";
    var deltCardTemplate = "";
    for (var a = 0; a < packOfCards.deltCards[0].length - 350; a++) {
        for (var b = 1; b < a; b++) {
            deltCardTemplate = packOfCards.deltCards[0].join(" ");
            console.log(deltCardTemplate);
        }
        // deltCardTemplate = `<br />`;
        deltCardsDiv.innerHTML = deltCardTemplate;
    }
    // packOfCards.deltCards[0].map(card => {
    //      let deltCardTemplate = ``;
    // for (let a = 1; a < 4; a++){
    //      for (let b = 1; b < a; b++){
    //           deltCardTemplate += `*`;
    //           // console.log(card)
    //           // console.log(deltCardTemplate)
    //      }
    //      deltCardTemplate += `<br />`
    //           console.log(card)
    //           deltCardsDiv.innerHTML = deltCardTemplate;
    // }
    // });
    packOfCards.hiddenCards[0].map(function (card) {
        hiddenCardTemplate += "<div class=\"cards\">".concat(card, "</div>");
        // console.log(hiddenCardTemplate);
    });
    // let a, b;
    // let position: string = ``;
    // for (a = 1; a < 9; a++){
    //      for (b = 1; b < a; b++){
    //           position += `*`
    //           // console.log(position)
    //      }
    //      position += `<br />`
    //           deltCardsDiv.innerHTML = position;
    //           // deltCardsDiv.innerHTML = ``;
    // }
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
