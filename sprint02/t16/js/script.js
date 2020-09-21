function firstElements(arr, n) {
    if (Array.isArray(arr)) {
        if (n < 0) {
            return arr.slice(0, 0);
        }
        return arr.slice(0, n);
    }
    return 0;
}


// var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

// console.log(firstElements(heroes, 5)); // ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
// console.log(firstElements(heroes, 1)); // ["Captain America"]
// console.log(firstElements(heroes, 3)); // ["Captain America", "Hulk", "Thor"]
// console.log(firstElements(heroes, 116)); // ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
// console.log(firstElements(heroes, -3)); // []