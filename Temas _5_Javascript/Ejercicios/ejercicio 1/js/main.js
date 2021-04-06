//Apartado 11

const div = document.getElementsByClassName("div")[0];
console.log(div);

const p2 = document.createElement("p")
const p = document.createElement("p");



p.textContent="dasdasdas";
p2.textContent = "camino al fututo";


div.appendChild(p);
div.appendChild(p2);
console.log(p);


//----

const button = document.getElementById("button");
console.log(button);

button.addEventListener("click",function (event){
   document.body.style.backgroundColor = "red"
});


//partado 3

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);


//v2 
// const list = document.querySelector("ul");
// const image = document.querySelector("img");

// const changeImage = e => image.src = e.target.textContent;

// list.addEventListener("click", changeImage);

//apartado 4

const apa4Paragraph = document.getElementById("paragraph");
const apa4Input = document.querySelector("input");
const apa4Button = document.querySelectorAll("button")[1];

apa4Button.addEventListener("click",() => apa4Paragraph.textContent = apa4Input.value);

//apartado 4.2

const apa42Paragraph = document.getElementById("parrafo2");
const apa42Input = document.querySelectorAll("input")[1];


apa42Input.addEventListener("input",() => apa42Paragraph.textContent = apa42Input.value);

//apartado 5

const textarea = document.querySelector(`#textarea1`);
textarea.addEventListener("input", e => {
   if(e.target.value.length > 15){
      e.target.style.color = "red";
   }else {
      e.target.style.color = "green"
   }
});

//version 2
// e.target.style.color = e.target.value.length > 15 ? "red" : "green";

//apartado 6

const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () => {
   if(evenInput.value % 2 !== 0) {
      evenInput.style.border = "2px solid red";
   }else{
      evenInput.style.border = "";
   }
});


//apartado 7
const ul  = document.getElementById("listToFill");

for ( let i = 1; i <= 10; i ++) {
   const newLi = document.createElement("li");
   newLi.textContent = `Elemento ${i}`;
   ul.appendChild(newLi);
}

//apartado 8

const newTabButton = document.getElementById ("newTab");
const link = document.querySelector("a");

newTabButton.addEventListener("click", () => link.target = "blank");



//apartado 9

const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
   ap9Paragraph.style.color = e.target.value;
});
