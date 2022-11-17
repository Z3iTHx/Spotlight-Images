const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");

const spotlightBox = document.querySelector(".image-box-spotlight-frame");
const spotlightText = document.querySelector(".image-box-spotlight-frame-title")

const firstImage = document.getElementById("first");
const secondImage = document.getElementById("second");
const thirdImage = document.getElementById("third");

firstImage.classList.add("picked")

let choiceValue = 1;

console.log("Przed kliknięciem guzika " + choiceValue)

leftButton.addEventListener("click", leftClick);
function leftClick() {
    choiceValue--
    if (choiceValue == 0) {
        choiceValue++
    }

    if (choiceValue == 1) {
        spotlightBox.style.backgroundImage = "url(/GALLERY/estate.JPG)"
        spotlightText.innerHTML = "Palac rodu von Burghaus w Sulowie"
        firstImage.classList.add("picked");  secondImage.classList.remove("picked");  thirdImage.classList.remove("picked")
        
    } else if (choiceValue == 2) {
        spotlightBox.style.backgroundImage = "url(/GALLERY/stream.JPG"
        spotlightText.innerHTML = "Rzeka mlynówka w Sulwowie"
        secondImage.classList.add("picked");  firstImage.classList.remove("picked"); thirdImage.classList.remove("picked")
    }
    console.log(choiceValue)
} 

rightButton.addEventListener("click", rightClick);
function rightClick() {
    choiceValue++
    if (choiceValue > 3) {
        choiceValue--
    }

    if (choiceValue == 2) {
        spotlightBox.style.backgroundImage = "url(/GALLERY/stream.JPG"
        spotlightText.innerHTML = "Rzeka mlynówka w Sulwowie"
        secondImage.classList.add("picked")
        firstImage.classList.remove("picked")
        thirdImage.classList.remove("picked")
    } else if (choiceValue == 3) {
        spotlightBox.style.backgroundImage = "url(/GALLERY/cross.JPG"
        spotlightText.innerHTML = "Krzyz poleglych w Wierzchowicach"
        secondImage.classList.remove("picked"); firstImage.classList.remove("picked");  thirdImage.classList.add("picked")
    }
}

firstImage.addEventListener("click", firstClick)
function firstClick() {
    choiceValue = 1
    spotlightBox.style.backgroundImage = "url(/GALLERY/estate.JPG)"
    secondImage.classList.remove("picked"); firstImage.classList.add("picked");  thirdImage.classList.remove("picked")
}

secondImage.addEventListener("click", secondClick)
function secondClick() {
    choiceValue = 2
    spotlightBox.style.backgroundImage = "url(/GALLERY/stream.JPG";
    secondImage.classList.add("picked"); firstImage.classList.remove("picked");  thirdImage.classList.remove("picked")
}

thirdImage.addEventListener("click", thirdClick)
function thirdClick() {
    choiceValue = 3
    spotlightBox.style.backgroundImage = "url(/GALLERY/cross.JPG"
    secondImage.classList.remove("picked"); firstImage.classList.remove("picked");  thirdImage.classList.add("picked")
}