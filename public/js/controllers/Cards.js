"use strict";


import MyMath from './MyMath.js';


class Card {

    // return array randomly fill with value of "initalWords" array
    static distribute() {
        let cards =  Card.getRandomCards(initalWords, 25);
        cards = Card.selectify(cards);
        cards = Card.teamify(cards);
        return cards;
    }

    // create array of size "number" randomly take in array "cards"
    static getRandomCards(cards, number) {
        let randomCards = [];
        const randomNumbers = MyMath.getRandomIntArray(number, cards.length, true);

        randomNumbers.forEach( (index) => {
            randomCards.push(cards[index]);
        });

        return randomCards;
    }

    // add require attributs to cards
    static selectify(words) {
        return words.map( (word) => {
            return {
                word: word,
                selected: false,
                discover: false
            };
        });
    }

    // add color attributs to cards
    static teamify(cards) {
        let excludedCards = [];

        // get blackCard location
        const blackCard     = [MyMath.getRandomInt(cards.length)];
        Array.prototype.push.apply(excludedCards, blackCard);

        // get redCards location
        const redCards       = MyMath.getRandomIntArray(8, cards.length, true, excludedCards);
        Array.prototype.push.apply(excludedCards, redCards);

        // get blueCards location
        const blueCards      = MyMath.getRandomIntArray(9, cards.length, true, excludedCards);
        Array.prototype.push.apply(excludedCards, blueCards);

        // apply color attributs in function of location;
        cards = Card.setColor(blackCard, cards, "black");
        cards = Card.setColor(blueCards, cards, "blue");
        cards = Card.setColor(redCards, cards, "red");

        return cards;
    }

    static setColor(indexs, cards, color) {
        indexs.forEach( (index) => {
            cards[index].color = color;
        });
        return cards;
    }

}

const initalWords = [
    "Champoin", "Téléphone", "Chat", "Coussin", "Céréales", "Piments", "Lampe", "Croix", "Porte", "Marteau", "Table", "Hache", "Clavier", "Bois", "Epée", "Ours", "Papier", "Toilette", "Billet", "Aimant", "Chaussette", "Lit", "Ecran", "Fourchette", "Courronne", "Courgette", "Costume", "Panier", "Fiole", "Balancoire", "Tableau", "Argent", "Marché", "Papillon", "Attraction", "Laser", "Lunette", "Nucléaire"
];

export default Card;
