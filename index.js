let gold = document.querySelector('.goldcost')
let fixedgold = parseFloat(gold.innerHTML)
let clickercost = document.querySelector('.clickercost')
let clickerlevel = document.querySelector('.clickerlevel')
let clickerincrease = document.querySelector('.cursorincrease')

let fixedclickercost = parseFloat(clickercost.innerHTML)
let fixedclickerincrease = parseFloat(clickerincrease.innerHTML)

let pickaxecost = document.querySelector('.pickaxecost')
let pickaxelevel = document.querySelector('.pickaxelevel')
let pickaxeincrease = document.querySelector('.pickaxeincrease')

let fixedpickaxecost = parseFloat(pickaxecost.innerHTML)
let fixedpickaxeincrease = parseFloat(pickaxeincrease.innerHTML)

let minercost = document.querySelector('.minercost')
let minerlevel = document.querySelector('.minerlevel')
let minerincrease = document.querySelector('.minerincrease')

let fixedminercost = parseFloat(minercost.innerHTML)
let fixedminerincrease = parseFloat(minerincrease.innerHTML)

let gpctext = document.getElementById("gpctext")
let gpstext = document.getElementById("gpstext")

let goldimagecontainer = document.querySelector(".goldimagecontainer")

let gpc = 1;
let gps = 0;

function incrementgold(event) {
    fixedgold += gpc;
    gold.innerHTML = Math.round(fixedgold);

    const x = event.offsetX;
    const y = event.offsetY;

    const div = document.createElement("div")
    div.innerHTML = `+${Math.round(gpc)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    goldimagecontainer.appendChild(div)

    div.classList.add('fade-up')
    timeout(div)
}

const timeout = (div) => {
    setTimeout(() => {
div.remove()
    }, 800)
}

function buyupgrade(upgrade){

}


function buyclicker() {
    if (fixedgold >= fixedclickercost) {
        gold.innerHTML = Math.round(fixedgold -= fixedclickercost);

        clickerlevel.innerHTML ++

        fixedclickerincrease = parseFloat((fixedclickerincrease).toFixed(2))
        clickerincrease.innerHTML = fixedclickerincrease
        gps += fixedclickerincrease


        fixedclickercost *= 1.16
        clickercost.innerHTML = Math.round(fixedclickercost)
    }
}

function buypickaxe() {
    if (fixedgold >= fixedpickaxecost) {
        gold.innerHTML = Math.round(fixedgold -= fixedpickaxecost);
        
        pickaxelevel.innerHTML ++

        fixedpickaxeincrease = parseFloat((fixedpickaxeincrease).toFixed(2))
        pickaxeincrease.innerHTML = fixedpickaxeincrease
        gps += fixedpickaxeincrease


        fixedpickaxecost *= 1.16
        pickaxecost.innerHTML = Math.round(fixedpickaxecost)
    }
}

function buyminer() {
    if (fixedgold >= fixedminercost) {
        gold.innerHTML = Math.round(fixedgold -= fixedminercost);
        
        minerlevel.innerHTML ++

        fixedminerincrease = parseFloat((fixedminerincrease).toFixed(2))
        minerincrease.innerHTML = fixedminerincrease
        gps += fixedminerincrease


        fixedminercost *= 1.16
        minercost.innerHTML = Math.round(fixedminercost)
    }
}

setInterval(() => {
fixedgold += gps / 10
gold.innerHTML = Math.round(fixedgold)
gpstext.innerHTML = Math.round(gps)
}, 100)

console.log("bucetinha boa")