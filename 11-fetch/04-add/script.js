/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here        
    const inputName = document.getElementById("hero-name").value
    const inputAlias = document.getElementById("hero-alter-ego").value
    const inputPowers = document.getElementById("hero-powers").value
    const newHero = {}
    const fetching = async() => {
        let rawData = await fetch("http://localhost:3000/heroes")
        let textData = await rawData.text()
        return arrayHeroes = await JSON.parse(textData)
    }
    fetching()
    document.getElementById("run").addEventListener("click", async function(){
        if (inputPowers && inputName && inputAlias){
        let arrayPowers = inputPowers.split(",")
        newHero.id = arrayHeroes.length+1
        newHero.name = inputName
        newHero.alterEgo = inputAlias
        newHero.abilities = arrayPowers
        arrayHeroes.push(newHero)
        console.table(arrayHeroes)
        }
    })
})();
