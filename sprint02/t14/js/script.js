function total(count, price, ower) {
    if (ower != undefined && typeof price == "number" && typeof count == "number") {
        ower += +(price * count).toFixed(2);
        return ower;
    } else if (ower == undefined && typeof price == "number" && typeof count == "number") {
        ower = +(price * count).toFixed(2);
        return ower;
    } else {
        return "Invalid number";
    }
}

// let sum = total(1, 0.1);

// sum = total(1, 0.2, sum);
// sum = total(1, 0.78, sum);

// console.log(sum); // will return 1.08