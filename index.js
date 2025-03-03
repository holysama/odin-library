const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    let book = new Book(title, author, pages, read);

    return myLibrary.push(book);
}

function createCard() {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardsGrid = document.querySelector(".cards-grid");


    cardsGrid.appendChild(card);
}

function clearFormInput() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
}

function toggleForm() {

    let form = document.querySelector(".book-form")
    let overlay = document.querySelector(".overlay");

    if (form.style.display === "none" && overlay.style.display === "none") {
        form.style.display = "block";
        overlay.style.display = "block"
    } else {
        form.style.display = "none";
        overlay.style.display = "none"
    }
}




