const input = document.querySelector("input");
input.addEventListener("focus", (event) => {
  console.log(event.target.value);
});
