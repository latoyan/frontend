let number1 = Number(15);
let bigint1 = BigInt(314);
let string1 = String("Hello world");
let boolean1 = Boolean(true);
let zero1 = Number(null);
let undefined1;
let object1 = null;
let symbol1 = Symbol("id");
let lfunc1 = alert;

alert(`It's number: ${typeof number1}\n` +
    `It's BigInt: ${typeof bigint1}\n` +
    `It's string: ${typeof string1}\n` +
    `It's boolean: ${typeof boolean1}\n` +
    `It's null: ${zero1}\n` +
    `It's undefined: ${typeof undefined1}\n` +
    `It's object: ${typeof object1}\n` +
    `It's symbol: ${typeof symbol1}\n` +
    `It's function: ${typeof lfunc1}\n`);