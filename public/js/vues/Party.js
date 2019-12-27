"use strict";


class Party {

    static init() {
        Party.create();
    }

    static create() {
        new Vue({
            el: '#game',

            data: {
                errors: [],
                cards: wordList()
            },

            methods: {
                select: function(card) {
                    card.selected = !card.selected;
                },
                valid: function(event) {
                    event.preventDefault();
                    console.log("Validated");
                },
                checkform: function(e) {
                    this.errors = [];

                    if (!this.selectLot._id) {
                        this.errors.push('Numéro de lot requis');
                        return false;
                    }

                    return true;
                }
            },

            computed: {

            }
        });
    }

}

const initalWords = [
    "Champoin", "Téléphone", "Chat", "Coussin", "Céréales", "Piments", "Lampe", "Croix", "Porte", "Marteau", "Table", "Hache", "Clavier", "Bois", "Epée", "Ours", "Papier", "Toilette", "Billet", "Aimant", "Chaussette", "Lit", "Ecran", "Fourchette", "Courronne", "Courgette", "Costume", "Panier", "Fiole", "Balancoire", "Tableau", "Argent", "Marché", "Papillon", "Attraction", "Laser", "Lunette", "Nucléaire"
];

const wordList = () => {
    let list = [];
    initalWords.forEach( (word) => {
        list.push({
            word: word,
            selected: false
        });
    });
    return list;
};

export default Party;
