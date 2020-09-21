function checkValid(name) {
    if (/^[a-z]+$/ig.test(name)) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    } else {
        return "Wrong Input";
    }
}

function greeting() {
    let firstName = prompt("First name: ");
    let lastName = prompt("Last name: ");

    firstName = checkValid(firstName);
    lastName = checkValid(lastName);

    alert(`Hello ${firstName} ${lastName}!`);
    console.log(`Hello ${firstName} ${lastName}!`);
}

greeting();