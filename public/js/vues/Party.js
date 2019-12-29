"use strict";


import Cards from '../controllers/Cards.js';


class Party {

    static init() {
        Party.create();
    }

    static create() {
        new Vue({
            el: '#game',

            data: {
                errors: [],
                cards: Cards.distribute()
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
                },
                cardClass: function(card) {
                    let blackCard = false;
                    let blueCard = false;
                    let redCard = false;

                    if (card.color) {
                        switch (card.color) {
                            case 'black':
                                blackCard = true;
                                break;
                            case 'blue':
                                blueCard = true;
                                break;
                            case 'red':
                                redCard = true;
                                break;
                            default:
                        }
                    }

                    return {
                        'selected-card' : card.selected,
                        'blackCard' : blackCard,
                        'blueCard' : blueCard,
                        'redCard' : redCard
                    };
                }
            },

            computed: {

            }
        });
    }

}

export default Party;
