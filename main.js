// variables

const inputTitle = document.querySelector(".input-title");
const inputAuthor = document.querySelector(".input-author");
const inputIsbn = document.querySelector(".input-isbn");
const btnSumit = document.querySelector(".btn-submit");
const perfect = document.querySelector(".perfect");
const btnRemove = document.querySelector(".last");
const btnClear = document.querySelector(".clear");

// starting coding

btnSumit.addEventListener("click", function() {
    const title = inputTitle.value;
    const author = inputAuthor.value;

    if (!Number(title) && title != "" && !Number(author)) {
        check();
        display();
    }
});

function check() {
    let getLocalStorage = window.localStorage.getItem("book");
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const isbn = inputIsbn.value;
    const obj = {
        title,
        author,
        isbn,
    };
    if (getLocalStorage == null) {
        listItems = [];
    } else {
        listItems = JSON.parse(getLocalStorage);
    }
    listItems.push(obj);
    window.localStorage.setItem("book", JSON.stringify(listItems));
}
display();

function display() {
    let getLocalStorage = window.localStorage.getItem("book");
    if (getLocalStorage == null) {
        listItems = [];
    } else {
        listItems = JSON.parse(getLocalStorage);
    }

    let displays = ``;
    for (const [i, n] of listItems.entries()) {
        displays += `<div class="list-book">
        <p>${n.title}</p>
        <p>${n.author}</p>
        <p>${n.isbn}</p>
        <p class="last" onclick="removeOne(${i})"><i class="fas fa-times"></i></button>
    </div>`;
    }
    perfect.innerHTML = displays;
    inputTitle.value = "";
    inputAuthor.value = "";
    inputIsbn.value = "";
}

function removeOne(index) {
    let getLocalStorage = window.localStorage.getItem("book");
    listItems = JSON.parse(getLocalStorage);
    listItems.splice(index, 1);
    window.localStorage.setItem("book", JSON.stringify(listItems));
    display();
}

btnClear.addEventListener("dblclick", function() {
    window.localStorage.clear();
});