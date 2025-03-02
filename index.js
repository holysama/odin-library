const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    
}

function showForm() {

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

