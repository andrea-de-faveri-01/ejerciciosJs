const body = document.querySelector("body")
const newD = document.createElement("div");
body.appendChild(newD);

function seisP(element) {
  for (var i = 1; i <= 6; i++) {
    let newP = document.createElement("p");

    newP.innerHTML = `Este es el párrafo número ${i}`;

    element.appendChild(newP);
  }
}
const seisPDentroDeUnDiv = seisP(newD);
