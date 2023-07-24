const deltCardsDiv: Element = document.querySelector("#delt-card-div")!;
const hiddenCardsDiv: Element = document.querySelector("#hidden-card-div")!;

class CardDeck {
     cards: string[];
     suits: string[];
     ranks: string[];
     deltCards: string[][];
     hiddenCards: string[][];
     constructor() {
          this.cards = [];
          this.deltCards = [];
          this.hiddenCards = [];
          this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
          this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
          this.generateCards();
     }
     generateCards() {
          for (let suit of this.suits) {
               for (let rank of this.ranks) {
                    this.cards.push(`${rank} ${suit}`);
               }
          }
     }

     shuffleCard(){
          packOfCards.cards.sort(() => Math.random() - 0.5);
          return this;
     }
     
     dealDeltCards() {
          this.deltCards.push(packOfCards.cards.slice(0, 28));
          return this;
     }
     dealHiddenCards() {
          this.hiddenCards.push(packOfCards.cards.slice(28, 52));
          return this;
     }
}

const packOfCards = new CardDeck();
packOfCards.shuffleCard().dealDeltCards().dealHiddenCards();
console.log(packOfCards);

const renderCard = () => {
     let deltCardTemplate = "";
     let hiddenCardTemplate = "";
     packOfCards.deltCards[0].map(card => {
          deltCardTemplate += `<div draggable="true" class="cards">${card}</div>`;
     });
     packOfCards.hiddenCards[0].map(card => {
          hiddenCardTemplate += `<div class="cards">${card}</div>`;
     });

     let a, b;
     let position: string = ``;
     for (a = 1; a <= 8; a++){
          for (b = 1; b < a; b++){
               position = deltCardTemplate;
          }
          deltCardsDiv.innerHTML = position;
          position = ``
     }
     // console.log(deltCardTemplate)
     // hiddenCardsDiv.innerHTML = hiddenCardTemplate;
     // // moveCards(deltCardsDiv);
     // Array.from(deltCardsDiv.children).forEach(card => {
     //      card.addEventListener("click", () => {
     //           console.log("clicked")
     //      })
     // })

}

renderCard();




