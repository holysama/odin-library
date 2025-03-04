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

    if (title === "" || author === "" || pages === "" || read === "") {
        return;
    }

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    
    createCard();
    clearFormInput(); 
    toggleForm();     
}

function createCard() {
    let cardsFlex = document.querySelector(".flex-cards");
    cardsFlex.innerHTML = "";

    for (let i = 0; i <= myLibrary.length - 1; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("div");
        title.classList.add("card-title");
        title.textContent = `${myLibrary[i].title}`;

        let author = document.createElement("div");
        author.classList.add("card-author");
        author.textContent = `Author: ${myLibrary[i].author}`;

        let pages = document.createElement("div");
        pages.classList.add("card-pages");
        pages.textContent = `${myLibrary[i].pages} Pages`;

        let status = document.createElement("div");
        status.classList.add("card-status");
        status.textContent = `Title: ${myLibrary[i].read}`;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);

        cardsFlex.appendChild(card);
    };
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