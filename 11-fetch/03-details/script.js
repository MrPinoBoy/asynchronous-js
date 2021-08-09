/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const fetching = async() => {
        let rawData = await fetch("http://localhost:3000/heroes")
        return textData = rawData.text()
    }
    const template = document.querySelector("#tpl-hero")
    const target = document.querySelector("#target")
    const clone = template.content.cloneNode(true)
    const name = clone.querySelector(".name")
    const alias = clone.querySelector(".alter-ego")
    const abilities = clone.querySelector(".powers")
    document.getElementById("run").addEventListener("click", async function(){
        let heroes = await fetching()
        let arrayHeroes = JSON.parse(heroes)
        const heroInput = document.getElementById("hero-id").value
        if (arrayHeroes.some(element => element.name.toLowerCase() === heroInput.toLowerCase())) {
            const hero = arrayHeroes.find(element => element.name.toLowerCase() === heroInput.toLowerCase())
            name.innerHTML = hero.name
            alias.innerHTML = hero.alterEgo
            abilities.innerHTML = hero.abilities.join(", ")
        } else {
            alert(`Our database doesn't contain informations on this hero. You could search for ${arrayHeroes[Math.floor(Math.random()*5)].name}`)
        }
        target.appendChild(clone)
    })
})();
