// book constructor
function Book( id, title, author,sales,price){
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

//Data initialization
let books =  [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
];
let displayedBooks = Array.from(books);

//Selectors
const booksTbody = document.getElementById("books-body");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput  = document.getElementById("salesInput"); 
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("saveIn");

const tfoot = document.querySelector("tfoot");

function upDateTable() {
    // vaciamos el t body por completo
    booksTbody.innerHTML= "";

    //Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;

        
    });
//apartado 3 del ejercicio 5
    const totalPrice = displayedBooks.reduce((priceSum, book)=> priceSum + book.price, 0);
    tfoot.textContent = `Precio total" ${totalPrice}`;
}

booksTbody.onclick = e =>  {
    if(e.target.tagName === "BUTTON"){
        books = books.filter(book =>book.id !=e.target.id);
        displayedBooks = displayedBooks.filter(book =>book.id !=e.target.id);
        upDateTable();
    }

};

upDateTable();

//Process form and add a new book

addBookButton.addEventListener("click", e => {
    e.preventDefault();
    const newID = books[books.length-1].id + 1;
    const newBook = new Book(newID, titleInput.value, authorInput.value,   
    salesInput.value, Number(priceInput.value));
    books.push(newBook);
    displayedBooks.push(newBook);
    
    upDateTable();
    addBookButton.parentNode.reset();
    });

//EJERCICIO 5


const filterInput = document.querySelector("#filterInput");
const priceHeader = document.querySelector("#priceHeader");

let ascendingOrder = true;

// apartado 1

filterInput.addEventListener("input", e => {
    //version 1 teniendo en cuanta las mayusculas (case sensitive)
    displayedBooks = books.filter(book => book.title.includes(e.target.value));

    //version2 Sin tener en centa las mayusculas
    displayedBooks = books.filter(book => {
    const uppertTitle = book.title.toUpperCase();
    const upperInputVlue = e.target.value.toUpperCase();
    return uppertTitle.includes(upperInputVlue);
});
  
    upDateTable();
});

//partado 2
priceHeader.getElementsByClassName.cursor = "pointer";
priceHeader.addEventListener("click", e =>{
    ascendingOrder = !ascendingOrder;

    displayedBooks.sort((book1, book2)=> {
        return ascendingOrder 
                ? book1.price - book2.price
                : book2.price - book1.price;
            });   
            upDateTable();
});

//apartado 3
document.querySelector("tfoot")

