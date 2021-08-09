/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let fetching = async() => {
        let rawData = await fetch("http://localhost:3000/heroes")
        return textData = rawData.text()
    }
    const template = document.getElementById("tpl-hero")
    const target = document.getElementById("target")
    // const liste = clone.querySelectorAll(".hero")
    // const title = clone.querySelectorAll(".title")
    // const name = clone.querySelectorAll(".name")
    // const alter = clone.querySelectorAll(".alter-ego")
    // const powers = clone.querySelectorAll(".powers")
    document.getElementById("run").addEventListener("click", async function(){
        const response = await fetching()
        const array = JSON.parse(response)
        console.log(array)
        array.forEach(element=> {
            const clone = template.content.cloneNode(true)
            const liste = clone.querySelectorAll(".hero")
            const title = clone.querySelectorAll(".title")
            const name = clone.querySelectorAll(".name")
            const alter = clone.querySelectorAll(".alter-ego")
            const powers = clone.querySelectorAll(".powers")
            name[0].innerHTML = element.name
            alter[0].textContent = element.alterEgo
            powers[0].textContent = element.abilities.join(', ')
            target.appendChild(clone)
        });
    })
})();
