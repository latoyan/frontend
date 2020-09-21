function num1(x) {
    let result = (x * 2) / 'a';
    return result;
}

function num2(x) {
    let result = (x - x) / 0;
    return result;
}

function num3() {
    let result = 0 * Infinity;
    return result;
}

function num4(x) {
    let result = x * 40000000;

    if (x == Infinity) {
        return true;
    }
    return false;
}

function iqtest() {
    let x = prompt("Введите номер операции от 1 до 4: ");

    switch (x) {
        case "1":
            alert(num1(x));
            break;
        case "2":
            alert(num2(x));
            break;
        case "3":
            alert(num3());
            break;
        case "4":
            alert(num4(x));
            break;
        default:
            alert("Некорректный ввод");
            iqtest();
    }
}

iqtest();