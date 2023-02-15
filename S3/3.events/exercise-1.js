const body = document.querySelector("body");
const btn = document.createElement("button");

body.appendChild(btn);
btn.id = "btnToClick";
btn.innerText = "Click";

btn.addEventListener("click", (event) => {
  console.log(event);
});
