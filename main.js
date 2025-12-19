console.log("Hello World");

let counter = 0;
function createNewElement() {
  let newElement = document.createElement("p");

  counter = counter + 1;
  newElement.textContent = "Element " + counter;
  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("darkModeBtn");

  if (!btn) {
    console.error("Button nicht gefunden");
    return;
  }

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    console.log("Dark Mode umgeschaltet");
  });
});
