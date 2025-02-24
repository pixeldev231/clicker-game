import { upgrades } from "./cosntants/upgrades.js"
let gold = document.querySelector('.goldcost')
let fixedgold = parseFloat(gold.innerHTML)

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
const mu = upgrades.find((u) => {
    if (u.name === upgrade) return u
})

if (fixedgold >= mu.fixedcost) {
    gold.innerHTML = Math.round(fixedgold -= mu.fixedcost);

    mu.level.innerHTML ++

    mu.fixedincrease = parseFloat((mu.fixedincrease).toFixed(2))
    mu.increase.innerHTML = mu.fixedincrease
    gps += mu.fixedincrease

    mu.fixedcost *= mu.costmulti;
    mu.cost.innerHTML = Math.round(mu.fixedcost)
}
}

function save () {
    localStorage.clear()

    upgrades.map((upgrade) => {
        
        const obj = JSON.stringify({
            fixedlevel: parseFloat(upgrade.level.innerHTML),
            fixedcost: upgrade.fixedcost,
            fixedincrease: upgrade.fixedincrease
        })

        localStorage.setItem(upgrade.name, obj)
    })

    localStorage.setItem('gps', JSON.stringify(gps))
    localStorage.setItem('gpc', JSON.stringify(gpc))
    localStorage.setItem('gold', JSON.stringify(fixedgold))
}

function load () {
    upgrades.map((upgrade) => {
        const savedvalues = JSON.parse(localStorage.getItem(upgrade.name))

upgrade.fixedcost = savedvalues.fixedcost
upgrade.fixedincrease = savedvalues.fixedincrease

upgrade.level.innerHTML = savedvalues.fixedlevel
upgrade.cost.innerHTML = Math.round(savedvalues.fixedcost)
upgrade.increase.innerHTML = savedvalues.fixedincrease

    })

    gps = JSON.parse(localStorage.getItem('gps'))
    gpc = JSON.parse(localStorage.getItem('gpc'))
    fixedgold = JSON.parse(localStorage.getItem('gold'))
}

setInterval(() => {
fixedgold += gps / 100
gold.innerHTML = Math.round(fixedgold)
gpstext.innerHTML = Math.round(gps)
}, 10)

setInterval(() => {
    localStorage.clear()

    upgrades.map((upgrade) => {
        
        const obj = JSON.stringify({
            fixedlevel: parseFloat(upgrade.level.innerHTML),
            fixedcost: upgrade.fixedcost,
            fixedincrease: upgrade.fixedincrease
        })

        localStorage.setItem(upgrade.name, obj)
    })


    localStorage.setItem('gps', JSON.stringify(gps))
    localStorage.setItem('gpc', JSON.stringify(gpc))
    localStorage.setItem('gold', JSON.stringify(fixedgold))
    console.log("save game")
    }, 60000)

    window.incrementgold = incrementgold
    window.buyupgrade = buyupgrade
    window.save = save
    window.load = load