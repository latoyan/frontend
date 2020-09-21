let num = 8;
let num2 = 9;
let res = "";

res += `Multiplication table with number - ${num}\n`;
while (num2) {
    res += `${num} * ${num2} = ${num * num2}\n`;
    num2--;
}

alert(res);