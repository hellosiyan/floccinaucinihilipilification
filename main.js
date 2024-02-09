import "./tailwind.css";
import "./style.css";

let scenarioOnOpen = Number(window.location.hash.split("-").at(-1));
let scenario = scenarioOnOpen > 0 ? scenarioOnOpen : 1;

window.location.hash = `scenario-${scenario}`;

document.querySelector("#next").addEventListener("click", (e) => {
  window.location.hash = `scenario-${++scenario}`;
});

document.querySelector("#prev").addEventListener("click", (e) => {
  window.location.hash = `scenario-${--scenario}`;
});
