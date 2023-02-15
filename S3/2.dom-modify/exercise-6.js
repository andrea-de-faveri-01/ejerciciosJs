const body = document.querySelector("body");

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

for (const app of apps) {
  const ul = document.createElement("ul");
  let li = document.createElement("li");

  li.innerText = app;
  ul.appendChild(li);
  body.appendChild(ul);
}
