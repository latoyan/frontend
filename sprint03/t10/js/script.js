let slideIndex = 1;

showSlides(slideIndex);
setInterval(plusAutoSlider, 3000);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function plusAutoSlider() {
    plusSlides(1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider");
    let i;

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    
}