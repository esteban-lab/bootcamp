

function User(name, firstLastName, secondLastName , email, age, city){
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
 
    this.incrementProducts = function (){
        this.productsCount++;
    };
    this.emptyProducts = function (){
        this.productsCount = 0;
    }
}


const users =  [
new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga"),
new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete"),
];


//selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");


for (let user of users){
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
}

//rellenar la lista acon la info de un usuario
function fillList(user){

    list.innerHTML = "";


for (const propertyName in user) {
    const value = user [propertyName];

    if (typeof value !== "function"){
    // console.log(`propertyName: ${propertyName}, value: ${value}`);
    const newListItem =document.createElement("li");
    newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
    newListItem.classList.add("list-group-item");
    list.appendChild(newListItem);
    }
  }
}
//estado inicial
fillList(users[0]);

function processProducts(e){
    const selectedUser = users.find(user => user.name === select.value);

    e.target === incrementButton
    ? selectedUser.incrementProducts()
    : selectedUser.emptyProducts()

    fillList(selectedUser);
}


//añadir Listeners

select.addEventListener("change", e => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);

