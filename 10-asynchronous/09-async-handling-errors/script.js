/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //let cool = async() => window.lib.getPersons().then(person => console.log(person), error => console.error(error))
    //document.getElementById("run").addEventListener("click", async function(){
    //    let success = await cool
    //    success()
    //})
    document.getElementById("run").addEventListener("click", async function(){
    const func = window.lib.getPersons()
        try {
            console.log(await func)
        } catch (error) {
            console.error(error)
        }
    })
})();
