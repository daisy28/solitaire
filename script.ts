const deltCardsDiv: Element = document.querySelector("#delt-card-div")!;
const hiddenCardsDiv: Element = document.querySelector("#hidden-card-div")!;
const cardDestination: Element = document.querySelector(".card_destination")!;

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

for (let i = 0; i < packOfCards.cards.length / 13; i++){
     cardDestination.innerHTML += `<div class="played_cards">A</div>`
}

const renderCard = () => {
     let hiddenCardTemplate = ``;
     let deltCardTemplate = ``;
     for (let a = 0; a < 9; a++){
          for (let b = 1; b < a; b++){
               deltCardTemplate +=`<div draggable="true" class="cards">${packOfCards.deltCards[0].pop()}</div>`;
          }
          deltCardTemplate += `<br />`;
          deltCardsDiv.innerHTML = deltCardTemplate;
     }
     packOfCards.hiddenCards[0].map(card => {
          hiddenCardTemplate += `<div class="cards">${card}</div>`;
          // console.log(hiddenCardTemplate);
     });
}

renderCard();




