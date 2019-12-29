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
                    if (!card.discover) {
                        card.selected = !card.selected;
                    }
                },
                valid: function(event) {
                    this.cards.forEach( (card) => {
                        if (card.selected) {
                            card.selected = false;
                            card.discover = true;
                        }
                    })
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
                    let neutralCard = false;

                    if (card.discover) {
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
                                neutralCard = true;
                                break;
                        }
                    }

                    return {
                        'selected-card' : card.selected,
                        'blackCard' : blackCard,
                        'blueCard' : blueCard,
                        'redCard' : redCard,
                        'neutralCard': neutralCard
                    };
                }
            },

            computed: {

            }
        });
    }

}

export default Party;
