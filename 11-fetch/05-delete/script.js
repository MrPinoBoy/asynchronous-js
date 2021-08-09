/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
        let textData = await rawData.text()
        return heroesArray = JSON.parse(textData)
    }
    fetching()
    document.getElementById("run").addEventListener("click", function(){

        let heroId = document.getElementById("hero-id")


        if (heroesArray.some(element => element.id == heroId.value)) {
            console.table(heroesArray)
            heroesArray.splice(heroId.value-1, 1)
            heroesArray.forEach((element, index) => {
                element.id = index+1
            });
            console.table(heroesArray)
            alert(`Hero correctly removed with id ${heroId.value}`)
        } else if (heroId.value == 0) {
            alert("Please enter a value")
        } else {
            alert(`Only ${heroesArray.length} remaining`)
        }
    })
})();
