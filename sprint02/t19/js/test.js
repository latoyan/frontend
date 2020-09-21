let ArrCorrect = ['1)()(())2(()',
    ')))erf)  )))()(v )(fq((((((qf(((((  t(',
    'null)',
    'null',
    '4) * fe---!),,,,()',
    'Hello brackets)!',
    '0o0o0(())O!))(())',
    ')))))))))',
    '0o0o0(())O!))(())',
    '12345'
];

let ArrUncor = [
    NaN,
    null,
    true,
    6053069,
    undefined
];

let result = (trash) => {
    for (let i = 0; i < trash.length; i++) {
        if (checkBrackets(trash[i]) >= 0 && checkBrackets(trash[i]) == trueResCheck[i]) {
            console.log(`True: ${ArrCorrect[i]} = ${trueResCheck[i]}`);
        } else if (checkBrackets(trash[i]) >= 0 && checkBrackets(trash[i]) != trueResCheck[i]) {
            console.log(`Error: ${ArrCorrect[i]} != ${trueResCheck[i]}`);
        } else if (checkBrackets(trash[i]) < 0 && checkBrackets(trash[i]) == falseResCheck) {
            console.log(`True: ${ArrUncor[i]} = ${falseResCheck[i]}`);
        } else if (checkBrackets(trash[i]) < 0 && checkBrackets(trash[i]) != falseResCheck) {
            console.log(`Error: ${ArrUncor[i]} != ${falseResCheck[i]}`);
        }
    }
}

let trueResCheck = [2, 20, 1, 0, 2, 1, 2, 9, 2, 0]; //правильные значения (ввод с рук) (работа с массивом ArrCorrect)
let falseResCheck = [-1];

result(ArrCorrect);
result(ArrUncor);