class CardDeck {
     cards: string[];
     suits: string[];
     ranks: string[];
     constructor() {
          this.cards = [];
          this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
          this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
          this.generateCards();
     }
     generateCards() {
          for (let suit of this.suits) {
               for (let rank of this.ranks) {
                    this.cards.push(`${rank} ${suit}`)
               }
          }
          // return this;
     }

     shuffle() {
          for (let i = this.cards.length - 1; i > 0; i--){
               const num = Math.floor(Math.random() * (i + 1))
               console.log(num)
               // console.log(this.cards[num])
               // return [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
          }
     }
}

const newCard = new CardDeck();
// newCard.shuffle()
// console.log(newCard);
// console.log(newCard.generateCards());
console.log(newCard.shuffle());
// console.log(newCard.shuffle());
// console.log(newCard.shuffle());
// console.log(newCard.cards);