"use strict";
even();
function even() {
    let evenOdd = prompt("type a number");
    if (evenOdd % 2 === 0) {
        alert(`${evenOdd} is even`)
    } else if (isNaN(evenOdd)) {
        alert("Please input a number");
        even();
    } else {
        alert(`${evenOdd} is odd`)
    }
}