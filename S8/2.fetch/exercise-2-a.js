const baseUrl = 'https://api.nationalize.io?name=';
const btnFetch = document.querySelector("button")
const input = document.querySelector("input")

btnFetch.addEventListener("click", async () => {
    await fetch(baseUrl + input.value)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
})














