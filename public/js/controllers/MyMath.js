"use strict";


class MyMath {

    static getRandomIntArray(size, max, unique =false, excluded =[]) {
        let rng = [];
        let number;

        while (rng.length < size) {
            number = MyMath.getRandomInt(max);
            // continue if number is not excluded
            if (!excluded.includes(number)) {
                if (unique) {
                    if ( !rng.includes(number) ) rng.push(number); // add number if not already exist when "unique" is true
                } else {
                    rng.push(number); // add number
                }
            }
        }

        return rng;
    }

    // return random number between 0 and "max"
    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}

export default MyMath;
