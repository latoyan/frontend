function checkDivision(beginRange, endRange) {
    let result = "";
    let i = Number(beginRange);
    let j = Number(endRange);

    if (i >= j || i >= 101 || j >= 101) {
        result = "error\n";
        return console.log(result);
    }
    if (!/^[1-9][0-9]{0,2}$/.test(beginRange) || !/^[1-9][0-9]{0,2}$/.test(endRange)) {
        result = "Invalid error";
        return console.log(result);
    }

    for (; i <= j; i++) {
        let check_2 = false,
            check_3 = false,
            check_10 = false,
            check_out = false;

        result += i;
        if (i % 2 == 0) {
            result += " is even";
            check_2 = true;
        }
        if (i % 3 == 0) {
            if (check_2 == true) {
                result += ",";
            }
            result += " is multiple of 3";
            check_3 = true;
        }
        if (i % 10 == 0) {
            if (check_3 == true || check_2 == true) {
                result += ",";
            }
            result += " is divisible by 10";
            check_10 = true;
        }
        if (check_2 == false && check_3 == false && check_10 == false) {
            result += " -";
            check_out = true;
        }
        result += "\n";
    }
    return console.log(result);
}

let rangeBegin = prompt("BeginInput: ");
let rangeEnd = prompt("EndInput: ");

checkDivision(rangeBegin, rangeEnd);