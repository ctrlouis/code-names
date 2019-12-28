"use strict";


import MyMath from './MyMath.js';


class Card {

    // return array randomly fill with value of "initalWords" array
    static distribute() {
        return Card.getRandomCards(initalWords, 25);
    }

    // create array of size "number" randomly take in array "cards"
    static getRandomCards(cards, number) {
        let randomCards = [];
        const randomNumbers = MyMath.getRandomIntArray(number, cards.length, true);

        randomNumbers.forEach( (index) => {
            randomCards.push(cards[index]);
        });

        return Card.makeUsable(randomCards);
    }

    static makeUsable(words) {
        return words.map( (word) => {
            return {
                word: word,
                selected: false
            }
        });
    }

    // create array usable by Party vue
    static wordList() {
        let list = [];
        initalWords.forEach( (word) => {
            list.push({
                word: word,
                selected: false
            });
        });
        return list;
    }

}

const initalWords = [
    "Champoin", "Téléphone", "Chat", "Coussin", "Céréales", "Piments", "Lampe", "Croix", "Porte", "Marteau", "Table", "Hache", "Clavier", "Bois", "Epée", "Ours", "Papier", "Toilette", "Billet", "Aimant", "Chaussette", "Lit", "Ecran", "Fourchette", "Courronne", "Courgette", "Costume", "Panier", "Fiole", "Balancoire", "Tableau", "Argent", "Marché", "Papillon", "Attraction", "Laser", "Lunette", "Nucléaire"
];

export default Card;
