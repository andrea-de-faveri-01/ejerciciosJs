const baseUrl = 'https://api.nationalize.io?name=';
const btnFetch = document.querySelector("button")
const body = document.querySelector("body")
const input = document.querySelector("input")
const input2 = document.createElement("input")
input.placeholder = "escribe aqui un nombre"
input2.placeholder = "escribe aqui una cuidad"
body.appendChild(input2)

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
    p.textContent = `El nombre ${data.name} tiene un ${getRandom()}% de ser de ${input2.value}`;
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.style.marginLeft = '10px';
    btn.addEventListener('click', () => {
      p.remove();
    });
    
    body.appendChild(p);
    p.appendChild(btn);
  }

  function getRandom() {
    return Math.floor(Math.random() * 101);
  }