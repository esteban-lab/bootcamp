// //posts - Paginacion del cliente

// //constantes
// const POSTS_URL ="https://jsonplaceholder.typicode.com/posts";
// const PAGE_SIZE = 20;

// //VARIABLES
// let posts = [];
// let currentPage = 1;

// //SELECTORES
// const postDiv = document.querySelector("#posts");
//     document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click",changePage));
//     document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click",changePage));

// //UTILIDADES
// function fillDiv() {
//     const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);
//     postDiv.innerHTML="";
//     newPagePosts.forEach(post => postDiv.innerHTML += `<h3>${post.title}</h3><p>${post.body}</p>`);
// }

// function changePage(event) {
//     if(event.target.className === "previousPage" && currentPage > 1){
//         currentPage--;
//     }else if(event.target.className === "nextPage" &&  currentPage < posts.length / PAGE_SIZE){
//         currentPage++;
//     }
//     fillDiv();
// }

// function paginate(array, page_size, page_number) {
//     return array.slice((page_number - 1) * page_size, page_number * page_size);
//   }
  

// fetch(POSTS_URL)
// .then(response => response.json())
// .then(data => {
//     posts = [...data];
//     fillDiv();
// });

//6.2 - Login y paginacion desde el servidor

//constantes

const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

//SELECTORES

const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const usersList = document.querySelector("#usersList");
document.querySelector("#loginButton").addEventListener("click",login);

function login(event) {
    event.preventDefault();

    const userInfo = {
        email : emailInput.value,
        password: passwordInput.value 
    };

    const config = {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => data.error ? alert(data.error) : fetchAllUsers())
}

async function fetchAllUsers() {
  let response = await fetch(USERS_URL);
  let data = await response.json();
    console.log(data);

  let users = [];

    for(let page = 1; page <= data.total_pages; page++){
        response =await fetch (`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data)
    }
    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>` );
}

// Alternativa para recuperar todas las paginas de una API utilizando .then()

let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response =>response.json())
    .then(data => { 
        users = users.concat(newData.data);

        if(newData.page < newData.total_pages){
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`);
        }else {
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
    
        }
    });
    
}