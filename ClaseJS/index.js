import { Dia } from "./dia.js";
import { estadoCieloToEmoji } from "./helpers.js";
import { getClimaPorDiaSemana } from "./api.js";

const semana = [
  new Dia("lunes", 20, 70, "soleado"),
  new Dia("martes", 19, 75, "soleado"),
  new Dia("miercoles", 18, 80, "nublado"),
  new Dia("jueves", 15, 30, "lluvioso"),
  new Dia("viernes", 22, 50, "nublado"),
  new Dia("sabado", 20, 37, "soleado"),
  new Dia("domingo", 21, 39, "soleado"),
];

console.log(semana);

const semanaDiv = document.getElementById("div-semana");
const ul = document.createElement("ul");

semanaDiv.appendChild(ul);
for (const dia of semana) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.appendChild(span);
  span.innerHTML = `${estadoCieloToEmoji(dia.estadoCielo)}, ${dia.diaSemana}, ${
    dia.temperatura
  }ºC, ${dia.getHumedadStr()} `;
  ul.appendChild(li);
}

console.log(semanaDiv);
