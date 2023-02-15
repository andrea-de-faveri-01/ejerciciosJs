// console.log("primera linea")

// try {
//     const a = 2
//     a.push(3)
//     console.log("linea try")
// } catch (err) {
//     console.log("linea catch");
// }

// console.log("segunda linea");

// const json = `{"nombr": "oscar"}`

// try {

// } catch (err) {

// }

const divLogs = document.getElementById("div-logs");
const input = document.getElementById("input")

const db = {
  logs: [
    { id: 1, text: "error en base de datos", date: "22:47" },
    { id: 1, text: "error en base de datos", date: "22:47" },
    { id: 1, text: "error en base de datos", date: "22:47" },
  ],
};

let temporizadorBusqueda = null
input.addEventListener('keyup',()=>{
    // si el tempo esta activo    
    if(temporizadorBusqueda){
        // lo paro        
        clearTimeout(temporizadorBusqueda)
    }
    temporizadorBusqueda = setTimeout(()=>{
        console.log("Estoy filtrando...")
        pintarLogs(db.logs.filter(x=> x.text.toLowerCase().includes(input.value.toLowerCase())))
    },1*1000)
})


function pintarLogs(logsfiltrados) {
  divLogs.innerHTML = "";
  const tabla = document.createElement("table");
  // crear cabecera (thead)
  const cabecera = document.createElement("thead");
  const filaCabecera = document.createElement("tr");
  const thId = document.createElement("th");
  const thText = document.createElement("th");
  const thDate = document.createElement("th");
  thId.innerText = "ID";
  thText.innerText = "TEXT";
  thDate.innerText = "DATE";
  filaCabecera.appendChild(thId);
  filaCabecera.appendChild(thText);
  filaCabecera.appendChild(thDate);
  cabecera.append(filaCabecera);
  // crear cuerpo (tbody)
  const cuerpo = document.createElement("tbody");
  for (const log of logsfiltrados) {
    const filaLog = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdText = document.createElement("td");
    const tdDate = document.createElement("td");
    tdId.innerText = log.id;
    tdText.innerText = log.text;
    tdDate.innerText = log.date;
    filaLog.appendChild(tdId);
    filaLog.appendChild(tdText);
    filaLog.appendChild(tdDate);
    cuerpo.appendChild(filaLog);
  }
  tabla.appendChild(cabecera);
  tabla.appendChild(cuerpo);
  // bucle para crear filas (tr)
  divLogs.appendChild(tabla);
}

pintarLogs(db.logs)


// setInterval(()=>{
//     console.log("hola")
// }, 2*1000)

// let conatdor = 0
// const intervalo = setInterval(()
// setInterval(()=>{
//     console.log("hola")
// }, 1*1500)


setInterval(() => {
    divLogs.style.top = `${-1px}`
    
}, 1*100);