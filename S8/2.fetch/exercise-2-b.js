const baseUrl = 'https://api.nationalize.io?name=';
const btnFetch = document.querySelector("button")
const input = document.querySelector("input")


btnFetch.addEventListener("click", async () => {
    await fetch(baseUrl + input.value)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data);
        pintar(data)
    })
    .catch(err => {
        console.log(err);
    })
})

async function pintar(data) {
    const body = document.querySelector("body")
    const p = document.createElement('p');
    p.textContent = `El nombre ${data.name} tiene un ${getRandom()}% de ser de ${"??"}`;
    document.body.appendChild(p);
  }

  function getRandom() {
    return Math.floor(Math.random() * 101);
  }