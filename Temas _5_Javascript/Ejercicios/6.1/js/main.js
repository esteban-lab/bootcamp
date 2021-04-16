//posts - Paginacion del cliente

//constantes
const POSTS_URL ="https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//VARIABLES
let posts = [];
let currentPage = 1;

//SELECTORES
const postDiv = document.querySelector("#posts");
    document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click",changePage));
    document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click",changePage));

//UTILIDADES
function fillDiv() {
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);
    postDiv.innerHTML="";
    newPagePosts.forEach(post => postDiv.innerHTML += `<h3>${post.title}</h3><p>${post.body}</p>`);
}

function changePage(event) {
    if(event.target.className === "previousPage" && currentPage > 1){
        currentPage--;
    }else if(event.target.className === "nextPage" &&  currentPage < posts.length / PAGE_SIZE){
        currentPage++;
    }
    fillDiv();
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  

fetch(POSTS_URL)
.then(response => response.json())
.then(data => {
    posts = [...data];
    fillDiv();
});

console.log(paginate(["HOLA"],2,2));
