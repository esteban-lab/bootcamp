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

const listItems = document.getElementsByTagName ("li");
 const imgae = document.querySelector("img");

 const changeImage = (e) => Image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);


