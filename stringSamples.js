'use strict';


const Thirder = {
    //There were a number of solutions I came up with
    //This one looks to my favorable solution. It takes only O(n/k) steps (where k=3), looking only at every third index/character instead of every single one (O(n)).
    iterativeOne: function(str) {
        let newstr = '';
        for (let i = 2; i < str.length; i += 3) {
            newstr += str[i]
        }
        return newstr;
    },
    iterativeTwo: function(str) {
        let newstr = '';
        for (let i = 0; i < str.length; i++) {
            if ((i + 1) % 3 === 0) {
                newstr += str[i];
            }
        }
        return newstr;
    },
    filterOne: function(str) {
        return [...str].filter((e, i) => !(++i % 3)).join("");
    },
    //doesn't really work unless the number of characters in the string is exactly a multiple of three
    regexOne: function(str) {
        return str.replace(/..(.)/g, "$1");
    }
}

module.exports = Thirder;