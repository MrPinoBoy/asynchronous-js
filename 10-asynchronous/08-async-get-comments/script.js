/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function(){
    let getArticle = async () => window.lib.getPosts().then(article => article, error => console.error(error))
    let getComment = async () => {
        let article = await getArticle()
        window.lib.getComments().then(comment => {article.forEach(element => {
            element.comment = comment[element.id]
            console.table(element)
        })}, error => console.error(error))
    }
    getComment()
})
}
)();
