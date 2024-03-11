const images = [
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png"
];

const diceTotal = document.querySelector("#diceTotal");

const dices = document.querySelectorAll('img');

function roll() {
    dices.forEach(function (dice) {
        dice.classList.add("shake")
    });
    setTimeout(function() {
        dices.forEach(function(dice) {
            dice.classList.remove("shake")
        })
    }, 1000);

    let firstDie = Math.floor((Math.random() * 6)) 
    let secondDie = Math.floor((Math.random() * 6)) 

    document.querySelector("#dice-1").setAttribute("src", images[firstDie])
    document.querySelector("#dice-2").setAttribute("src", images[secondDie])
    diceTotal.innerHTML = "Dice value is " + (firstDie + secondDie + 2);
}


