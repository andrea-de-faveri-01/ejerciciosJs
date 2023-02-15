//const divControl = document.getElementById("div-control")
const btnUp = document.createElement("button");
const btnRight = document.createElement("button");
const btnDown = document.createElement("button");
const btnLeft = document.createElement("button");
const miDivControl = document.createElement("div");
const miDiv = document.createElement("div");
const body = document.querySelector("body");

body.appendChild(miDivControl);
body.appendChild(miDiv);

miDivControl.appendChild(btnUp);
miDivControl.appendChild(btnRight);
miDivControl.appendChild(btnDown);
miDivControl.appendChild(btnLeft);

miDiv.style.width = "150px";
miDiv.style.height = "150px";
miDiv.style.backgroundColor = "green";
miDiv.style.position = "absolute";
miDiv.style.top = "150px";
miDiv.style.left = "150px";

miDivControl.style.margin = "50px";

btnUp.innerText = "UP";
btnUp.style.position = "absolute";
btnUp.style.top = "5px";
btnUp.style.left = "70px";

btnRight.innerText = "RIGHT";
btnRight.style.position = "absolute";
btnRight.style.top = "15px";
btnRight.style.left = "120px";

btnDown.innerText = "DOWN";
btnDown.style.position = "absolute";
btnDown.style.top = "35px";

btnLeft.innerText = "LEFT";
btnLeft.style.position = "absolute";
btnLeft.style.top = "15px";
btnLeft.style.left = "5px";

const botones = document.querySelectorAll("button");
let y = 150;
let x = 150;
for (const boton of botones) {
  boton.addEventListener("click", () => {
    console.log(boton.className);
    switch (boton) {
      case btnUp:
        console.log("up");
        y--;
        miDiv.style.top = `${y}px`;
        break;
      case btnRight:
        console.log("right");
        x++;
        miDiv.style.left = `${x}px`;
        break;
      case btnDown:
        console.log("down");
        y++;
        miDiv.style.top = `${y}px`;
        break;
      case btnLeft:
        console.log("left");
        x--;
        miDiv.style.left = `${x}px`;
        break;
    }
  });
}
