const body = document.querySelector("body");
const div = document.createElement("div");

body.appendChild(div);

function consoleFetch() {
  fetch("https://api.agify.io?name=michael")
    .then(function (resultado) {
      resultado.json()
      .then(function (apiObj) {
        console.log(apiObj);
      })
    })
    .catch(function (err) {
      console.log(err);
    });
}
consoleFetch()

