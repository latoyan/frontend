"use strict"

function triangle(num) {
    let res = "";

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i; j++) {
            res += '*';
        }
        res += '\n';
    }
    return res;
}

let num = 6;
alert(triangle(num));