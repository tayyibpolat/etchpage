let container = document.getElementById("container");

let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "button";

let input = prompt("n enter an odd number between 1 and 99:");
let number = parseInt(input);

for (let i = 0; i < number; i++) {
    let div = document.createElement("div");
    div.classList.add("item");
    container.appendChild(div);
}