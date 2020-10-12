function getFormattedDate(date) {
    let day = ifOneLength(date.getDate());
    let year = date.getFullYear();
    let month = ifOneLength(date.getMonth() + 1);
    let day2 = week(date.getDay());
    let hours = ifOneLength(date.getHours());
    let min = ifOneLength(date.getMinutes());

    return `${day}.${month}.${year} ${hours}:${min} ${day2}`;
}

function ifOneLength(time) {
    if (String(time).length == 1) {
        return String('0' + time);
    } else {
        return time;
    }
}

function week(time) {
    if (time == 1) {
        return "Monday";
    } else if (time == 2) {
        return "Tuesday";
    } else if (time == 3) {
        return "Wednesday";
    } else if (time == 4) {
        return "Thursday";
    } else if (time == 5) {
        return "Friday";
    } else if (time == 6) {
        return "Saturday";
    } else if (time == 7) {
        return "Sunday";
    }

}





const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');
console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday