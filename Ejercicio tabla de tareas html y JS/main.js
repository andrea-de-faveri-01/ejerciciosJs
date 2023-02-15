import { Tarea } from "./tarea.js";

let db = {
  tareas: [],
  id: 0,
};

document.addEventListener("DOMContentLoaded", () => {
  const dbGuardado = JSON.parse(localStorage.getItem("lista"));
  if(dbGuardado){
  db = dbGuardado;
  pintarTareas();
  }
});

const principal = document.querySelector("#lista-de-tareas");

const input = document.createElement("input");
const btnAdd = document.createElement("button");
const ul = document.createElement("ul");
ul.className = "lista";
btnAdd.innerHTML = "Añadir";

principal.appendChild(input);
principal.appendChild(btnAdd);
principal.appendChild(ul);

document.querySelector("input").placeholder = "Escribe una nueva tarea";

function addTarea() {
  const textoTarea = input.value.trim();
  if (
    textoTarea !== "" &&
    !db.tareas.map((x) => x.texto).includes(textoTarea)
  ) {
    db.id++;
    db.tareas.push(new Tarea(db.id, textoTarea, false));
    pintarTareas();
  }
  input.value = "";
  input.focus();
  guardarCambios();
}

btnAdd.addEventListener("click", () => {
  addTarea();
});

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTarea();
  }
});

function pintarTareas() {
  ul.innerHTML = "";
  for (const tarea of db.tareas) {
    const li = document.createElement("li");
    const divLi = document.createElement("div");
    let spanLi = document.createElement("span");
    spanLi.className = "texto-tarea";
    const btnHecho = document.createElement("button");
    const btnEliminar = document.createElement("button");

    btnHecho.innerText = "✔️";
    btnEliminar.innerText = "🗑️";
    spanLi.innerHTML = tarea.nombre;

    btnEliminar.addEventListener("click", () => {
      eliminarTarea(tarea, li);
    });
    btnHecho.addEventListener("click", () => {
      hacerTarea(tarea, spanLi);
      
    });

    divLi.appendChild(btnHecho);
    divLi.appendChild(btnEliminar);
    divLi.appendChild(spanLi);
    li.appendChild(divLi);

    ul.appendChild(li);
  }
}

function eliminarTarea(tarea, li) {
  console.log(tarea);
  db.tareas = db.tareas.filter((t) => t.id !== tarea.id);

  ul.removeChild(li);

  guardarCambios();
}
function hacerTarea(tarea, span) {
  if (tarea.hecha) {
    tarea.hecha = false;
    span.classList.remove("hecha");
  } else {
    
    tarea.hecha = true;
    span.classList.add("hecha");
    
  }
  span.className = "tarea-hecha"
  guardarCambios();
}

function guardarCambios() {
  localStorage.setItem("lista", JSON.stringify(db));
}
