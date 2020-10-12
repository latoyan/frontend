function getElements() {
    let elements = document.querySelectorAll(`li`);

    error(elements);
    getinClassEl(elements);
}

function getinClassEl(elements) {
    for (let i = 0; i < elements.length; i++) {
        let dataElem = (elements[i].getAttribute(`data-element`)).split(` `);
        elements[i].appendChild(document.createElement(`br`));
        for (let j = 0; j < dataElem.length; j++) {
            let div = document.createElement(`div`);
            div.className = `elem ${dataElem[j]}`;
            if (dataElem[j] === `none`) {
                let line = document.createElement('div');
                line.className = `line`;
                div.appendChild(line);
            }
            elements[i].appendChild(div);
        }
    }
}

function error(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute(`data-element`) === null)
            elements[i].setAttribute(`data-element`, `none`);
        if (elements[i].getAttribute('class') === null)
            elements[i].setAttribute(`class`, `unknown`);
    }
}

getElements();