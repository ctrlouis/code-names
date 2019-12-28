"use strict";


class MyMath {

    static getRandomIntArray(size, max, unique =false) {
        let rng = [];
        let number;

        while (rng.length < size) {
            number = MyMath.getRandomInt(max);
            if (unique) {
                if ( !rng.includes(number) ) rng.push(number);
            } else {
                rng.push(number);
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
