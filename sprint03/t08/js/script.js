let heroesList = [
    { name: 'Black Panter', strength: 66, age: 53, },
    { name: 'Captain America', strength: 79, age: 137, },
    { name: 'Captain Marvel', strength: 97, age: 26, },
    { name: 'Hulk', strength: 80, age: 49, },
    { name: 'Iron Man', strength: 88, age: 49, },
    { name: 'Spider-Man', strength: 78, age: 16, },
    { name: 'Thanos', strength: 99, age: 1000, },
    { name: 'Thor', strength: 95, age: 1000, },
    { name: 'Yon-Rogg', strength: 73, age: 52, },
]

let ageFlag = false;
let strengthFlag = false;
let nameFlag = false;

let count = 0;

let ButtonSort = { name: "Name", strength: "Strength", age: "Age" }
let place = document.getElementById("placeholder");

place.innerHTML = "";

function MethodSort(param) {
    let divNotification = document.getElementById("notification");
    let node = document.createElement("span");
    if (param === "begin") {
        node.innerHTML = "Click on cell to sort the column";
    } else {
        node.innerHTML = `Sorting by ${param}, order: ${
            (param === "Name") ? (nameFlag ? "ASC" : "DESC") : 
              (param === "Age") ? (ageFlag ? "ASC" : "DESC") :
                (strengthFlag ? "ASC" : "DESC")
        }`;
    }
    divNotification.innerHTML = ``;
    divNotification.appendChild(node);
}

function ButtonOnTable(table) {
    let trElementHead = document.createElement("tr");
    table.append(trElementHead);
    trElementHead.setAttribute(`class`, `top`);
    for (let i in ButtonSort) {
        let thElement = document.createElement("th");
        trElementHead.append(thElement);
        thElement.setAttribute(`onclick`, `sortTable(\'${ButtonSort[i]}\')`);
        thElement.append(ButtonSort[i]);
    }
}

function sortTable(param) {
    if (param === 'Age') {
        if (ageFlag === false) {
            ageFlag = true;
            heroesList.sort((a, b) => a.age > b.age ? 1 : -1);

            count++;
        } else {
            ageFlag = false;
            heroesList.sort((a, b) => a.age > b.age ? -1 : 1);
            count++;
        }
    }
    if (param === 'Strength') {
        if (strengthFlag === false) {
            strengthFlag = true;
            heroesList.sort((a, b) => a.strength > b.strength ? 1 : -1);
            count++;
        } else {
            strengthFlag = false;
            heroesList.sort((a, b) => a.strength > b.strength ? -1 : 1);
            count++;
        }
    }
    if (param === 'Name') {
        if (nameFlag === false) {
            nameFlag = true;
            heroesList.sort((a, b) => a.name > b.name ? 1 : -1);
            count++;
        } else {
            nameFlag = false;
            heroesList.sort((a, b) => a.name > b.name ? -1 : 1);
            count++;
        }
    }
    MethodSort(param);
    let tabDelete = document.getElementById(`table${count - 1}`);
    tabDelete.parentNode.removeChild(tabDelete);
    ElementsOnTable(place);
}

function AllElements(table) {
    for (let i in heroesList) {
        let tdElement = document.createElement("tr");

        table.append(tdElement);
        for (let j in heroesList[i]) {
            let trElement = document.createElement("td");

            tdElement.append(trElement);
            trElement.append(heroesList[i][j]);
        }
    }
}

function ElementsOnTable(place) {
    let divBorderTable = document.createElement("table");

    divBorderTable.setAttribute('id', `table${count}`);
    place.append(divBorderTable);
    ButtonOnTable(divBorderTable);
    AllElements(divBorderTable);
}

MethodSort("begin");
ElementsOnTable(place);