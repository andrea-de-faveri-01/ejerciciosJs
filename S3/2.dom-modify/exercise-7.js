const body = document.querySelector("body");
const pOut = document.querySelectorAll(".fn-remove-me");
console.log(pOut);
for (let i = 0; i < pOut.length; i++) {
  body.removeChild(pOut[i]);
}
