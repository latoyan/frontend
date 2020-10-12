let nameHero = document.getElementById("hero");
let lab = document.querySelector("#lab");

document.getElementById("btn").onclick = function transformation() {
    if (lab.style.backgroundColor == "rgb(112, 150, 75)") {
        lab.style.backgroundColor = "rgb(255, 179, 0)";
        nameHero.innerHTML = "Bruce Banner";
        nameHero.style.fontSize = "60px";
        nameHero.style.letterSpacing = "2px";
    } else {
        lab.style.backgroundColor = "rgb(112, 150, 75)";
        nameHero.innerHTML = "Hulk";
        nameHero.style.fontSize = "130px";
        nameHero.style.letterSpacing = "6px";
    }
}