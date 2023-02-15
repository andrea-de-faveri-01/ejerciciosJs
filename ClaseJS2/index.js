const btnFetch = document.getElementById("btn-fetch");
const selectDia = document.getElementById("select-dia");

btnFetch.addEventListener("click", async () => {
    btnFetch.setAttribute("diasbled", true)
  const resultado = await fetch(
    `https://meteo-de-oscar.proxy.beeceptor.com/${selectDia.value}`
  );
  const obj = await resultado.json();
  console.log(obj.temperatura);
  btnFetch.removeAttribute("disabled")
});

function dibujarDatosDia(dia) {
  const span = document.createElement("span");
  span.innerHTML = dia.temperatura;
  document.getElementById("contenedor").appendChild(span);
}
