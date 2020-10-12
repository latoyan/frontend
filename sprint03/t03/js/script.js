let delDup = (arr) => arr.filter((v, i) => arr.indexOf(v) === i);

let delExtraSpaces = (str = ` `, words = ` `) => {
    return ((str += ' ' + words).trim()).split(/\s+/);
}

function addWords(obj, words) {
    let array = delExtraSpaces(obj.words, words);

    obj.words = (delDup(array)).join(` `);
    return obj;
}

function removeWords(obj, words) {
    let arrObj = delDup(delExtraSpaces(obj.words));
    let arrWords = delDup(delExtraSpaces(words));

    arrWords.forEach(element => {
        (arrObj.indexOf(element) === -1) ?
        0: arrObj.splice(arrObj.indexOf(element), 1);
    });
    obj.words = arrObj.join(` `);
    return obj;
}

function changeWords(obj, words1, words2) {
    removeWords(obj, words1);
    return addWords(obj, words2);
}

// const obj = {
//     words: 'newspapers newspapers  books magazines'
// };

// console.log(obj); // {words: "newspapers newspapers  books magazines"}
// addWords(obj, 'radio newspapers   ');
// console.log(obj); // {words: "newspapers books magazines radio"}
// removeWords(obj, 'newspapers   radio');
// console.log(obj); // {words: "books magazines"}
// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj); // {words: "tv internet"}