//Task1

let heading = document.querySelector("#heading");
let button = document.querySelector("#btn");

button.addEventListener("click", () => {
    heading.style.color = "red";
    heading.style.fontSize = "30px";
});



//Task2

let data = document.querySelector("#data");
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");

button1.addEventListener("click", () => {
    data.style.backgroundColor = "blue";
    data.style.color = "white";
});

button2.addEventListener("click", () => {
    data.style.backgroundColor = "yellow";
    data.style.color = "white";
});