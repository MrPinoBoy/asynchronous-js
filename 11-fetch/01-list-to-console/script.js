/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        let fetcher = async () => {
            let x = await fetch("http://localhost:3000/heroes")//await stops the code until this line is done
            return x.text()
    }
    document.getElementById("run").addEventListener("click", async function(){
        console.log(await fetcher())//await waits for a returned value
    })
})();
