/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let success = article => {
            article.forEach(element => {
                let reussite = comment => {
                    element.comment = comment[element.id]
                    console.table(element)
                }
                let echec = msg => {
                    console.error(msg)
                }
                window.lib.getComments().then(reussite, echec)
            });
        }

        let error = error => {
            console.error(error)
        }
        window.lib.getPosts().then(success, error)
    })
})();
