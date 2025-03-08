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

        let selectRead = document.createElement("select");
        selectRead.classList.add("card-status");
        selectRead.setAttribute("name", "status");
        selectRead.setAttribute("id", "status-book");

        let statuses = ["Read", "Not Read", "Reading"];

        statuses.forEach(status => {
            let option = document.createElement("option");
            option.setAttribute("value", status);
            option.textContent = status;

            if (myLibrary[i].read === status) {
                option.selected = true;
            }

            selectRead.appendChild(option);
        });

        selectRead.addEventListener("change", (event) => {
            if (event.target.value === "Read") {
                myLibrary[i].read = "Read";
            } else if (event.target.value === "Not Read") {
                myLibrary[i].read = "Not Read";
            } else {
                myLibrary[i].read = "Reading";
            }
        })

        

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.setAttribute("data-index-number", i);
        removeBtn.addEventListener("mouseenter", () => {
            removeBtn.classList.add("fa-bounce");
        });
        removeBtn.addEventListener("mouseleave", () => {
            removeBtn.classList.remove("fa-bounce");
        });

        removeBtn.addEventListener("click", () => {
            let index = Number(removeBtn.dataset.indexNumber);
            myLibrary.splice(index, 1);
            createCard();
        });

        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash-can");
        removeBtn.appendChild(icon)

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(selectRead);
        card.appendChild(removeBtn);
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