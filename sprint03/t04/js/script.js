let concat = (str1, str2) => {
    funpro.count = 0;

    function funpro() {
        let randomTxt = prompt("Text: ");

        if (randomTxt == null) return str1;
        funpro.count++;
        return (str1 + ' ' + randomTxt);
    }

    if (str2 === undefined) {
        return funpro;
    }
    return (str1 + ' ' + str2);
}

// let phrase1 = concat("Hulk", "smash!");
// let output = phrase1;
// console.log(output);
// // Hulk smash!
// let phrase2 = concat("Leave");
// output = phrase2(); // a prompt appears. Enter "Hulk alone!" into the prompt
// console.log(output); // Leave Hulk alone!
// console.log(phrase2.count); // 1
// output = phrase2(); // a prompt appears. Enter "me alone, please!" into the prompt
// console.log(output); // Leave me alone, please!
// output = phrase2(); // a prompt appears. Enter "HULK ALONE!" into the prompt
// console.log(output); // Leave HULK ALONE!
// console.log(phrase2.count); // 3
// let phrase3 = concat("Go");
// output = phrase3(); // a prompt appears. Enter "away!" into the prompt
// console.log(output); // Go away!
// console.log(phrase3.count); // 1
// console.log(phrase2.count);