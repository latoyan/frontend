function hero(team, universe, race, eyeColor, hairColor) {
    if ((team == 'Avengers' || team == 'S.H.I.E.L.D.') &&
        universe == 'Marvel' && race == 'human' && eyeColor == 'green' &&
        (hairColor == 'lightBrown' || hairColor == 'green')) {
        alert("This is Black Widow!");
    } else if ((team == 'Justice League Of America' || team == 'Teen Titans') &&
        universe == 'DC Comics' && (race == 'human' || race == 'kryptonian') &&
        eyeColor == 'blue' && hairColor == 'black') {
        alert("This is a Superman or Robin!");
    } else {
        alert("Didn't recognize!");
    }
}

let team = prompt("Write team hero: ");
let universe = prompt("Write universe hero: ");
let race = prompt("Write race hero: ");
let eyeColor = prompt("What's color eyes you're hero? ");
let hairColor = prompt("What's color hair you're hero? ");

hero(team, universe, race, eyeColor, hairColor);