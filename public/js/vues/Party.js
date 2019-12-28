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
                }
            },

            computed: {

            }
        });
    }

}

export default Party;
