// this defines the event listeners
document.querySelector("#text").addEventListener("keyup", add);

let total = document.querySelector("#total");

function add () {
  let text = document.querySelector("#text").value;
  let length = text.length
  total.innerHTML = `The current amount of letters is: ${length}`;
  console.log(length);
}
