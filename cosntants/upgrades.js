import { defaltvalues } from "./defaltvalues.js";

function createupgrades () {
    const upgradescontainer = document.getElementById('upgradescontainer')
    const template = document.getElementById("upgradetemplate").textContent

    defaltvalues.forEach((obj) =>{
let html = template;
Object.keys(obj).forEach((key) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    html = html.replace(regex, obj[key])
});

upgradescontainer.innerHTML += html
    })

}

createupgrades()

export const upgrades = [
    {
name: 'clicker',
cost: document.querySelector('.clickercost'),
fixedcost: parseFloat(document.querySelector('.clickercost').innerHTML),
increase: document.querySelector(".clickerincrease"),
fixedincrease: parseFloat(document.querySelector(".clickerincrease").innerHTML),
level: document.querySelector(".clickerlevel"),
goldmulti: 1.025,
costmulti: 1.12
},

{
    name: 'pickaxe',
    cost: document.querySelector('.pickaxecost'),
    fixedcost: parseFloat(document.querySelector('.pickaxecost').innerHTML),
    increase: document.querySelector(".pickaxeincrease"),
    fixedincrease: parseFloat(document.querySelector(".pickaxeincrease").innerHTML),
    level: document.querySelector(".pickaxelevel"),
    goldmulti: 1.030,
    costmulti: 1.12,
    },

    {
        name: 'miner',
        cost: document.querySelector('.minercost'),
        fixedcost: parseFloat(document.querySelector('.minercost').innerHTML),
        increase: document.querySelector(".minerincrease"),
        fixedincrease: parseFloat(document.querySelector(".minerincrease").innerHTML),
        level: document.querySelector(".minerlevel"),
        goldmulti: 1.035,
        costmulti: 1.12,
        },

        {
            name: 'factory',
            cost: document.querySelector('.factorycost'),
            fixedcost: parseFloat(document.querySelector('.factorycost').innerHTML),
            increase: document.querySelector(".factoryincrease"),
            fixedincrease: parseFloat(document.querySelector(".factoryincrease").innerHTML),
            level: document.querySelector(".factorylevel"),
            goldmulti: 1.040,
            costmulti: 1.12,
            },
    {
            name: 'potion',
            cost: document.querySelector('.potioncost'),
            fixedcost: parseFloat(document.querySelector('.potioncost').innerHTML),
            increase: document.querySelector(".potionincrease"),
            fixedincrease: parseFloat(document.querySelector(".potionincrease").innerHTML),
            level: document.querySelector(".potionlevel"),
            goldmulti: 1.040,
            costmulti: 1.12,
            },

]