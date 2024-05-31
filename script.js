let tamagotchiLijst = ["fotos/ei.png", "fotos/ei_openen_fase1.png", "fotos/ei_openen_fase2.png", "fotos/wolfje.png" ]

let wolfje = document.querySelector("#wolfje")
let energyBalk = document.querySelector("#energy")
let play = document.querySelector("#play")
let feed = document.querySelector("#feed")
let evolve = document.querySelector("#evolve")
let energy = 50

let teller = 0

// - - - += gelijk aan = value + 10 (Uitleg broer)
function energieHoger(){
    energy += 10;
    updatEnergy()
    changeImg()
    evolveBttn()
}
feed.addEventListener("click", energieHoger)

function energieLager(){
    energy -= 10;
    updatEnergy()
    changeImg()
    evolveBttn()
}
play.addEventListener("click", energieLager)

function updatEnergy(){
    energyBalk.value = energy
}
updatEnergy()

// - - - voorbeeld mistery number 
// - - - ChatGPT
// Promt: zou je mij kunnen uitleggen waarom deze code niet werkt in JavaScript? oude code 2x else if
// Uitleg de else if is nu dubbel waardoor hij de andere niet leest
function changeImg(){
    if (energy > 40) {
        wolfje.src = "fotos/wolfje.png";
    }
    else if(energy >= 30){
        wolfje.src = "fotos/wolfje_upgrade.png";
    }
    else{
        wolfje.src = "fotos/wolfje_slapend.png";
    }
}
changeImg()

// - - - uitleg week 4 array
function volgendPlaatje(){
    teller = teller + 1
    wolfje.src = tamagotchiLijst[teller]
}
wolfje.addEventListener("click", volgendPlaatje)

// - - - Uitleg Iris en Roan
function evolveBttn(){
    if(energy == 100){
        evolve.disabled = false;
    }
    else{
        evolve.disabled = true;
    }
}
evolveBttn()

function upgrade(){
    wolfje.src = "fotos/wolfje_messy.png"
}
evolve.addEventListener("click", upgrade)