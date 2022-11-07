/*let resTag = document.getElementsByTagName('div');
for (const iterator of resTag) {
  iterator.style.backgroundColor = 'yellow'; 
}

let resId = document.getElementById('lastDiv');
resId.style.backgroundColor = 'red';
console.warn(resId.style.backgroundColor);

let resClass = document.getElementsByClassName('fDiv');
for (const iterator of resClass) {
  iterator.style.backgroundColor = 'blue'; 
}*/

/*Написать сайт для хранения заметок
Заметка состоит с
- Фото (опционально)
- Заголовка
- Текста

Функционал сайта
- Поиск по заголовку (выделяет оранжевым заметку)
- Удаление
- Добавление*/

var card_number = 0;
init();

function init() {
    document.getElementById("add_btn").onclick = addNote;
    document.getElementById("delete_btn").onclick = deleteBtn;
    document.getElementById("search_btn").onclick = searchBtn;
}

function addNote() {
    let img = document.createElement("img");
    img.src = document.getElementById("url_add_box").value;
    img.style.width = "160px"

    let title = document.createElement("div");
    title.innerHTML = document.getElementById("title_add_box").value;

    let text = document.createElement("div");
    text.innerHTML = document.getElementById("text_add_box").value;

    let note = document.createElement("div");
    note.className = "note";
    note.id = card_number + "";
    card_number = card_number + 1;
    note.appendChild(img);
    note.appendChild(title);
    note.appendChild(text);

    document.getElementById("content_box").appendChild(note);
}

function deleteBtn() {
    let id = document.getElementById("id_delete_box").value;
    document.getElementById(id).remove();
}

function searchBtn() {
    let str = document.getElementById("text_search_box").value;
    let resClass = document.getElementsByClassName('note');

    for (const iterator of resClass) {
        console.log(iterator.children[1].innerHTML);
        if (iterator.children[1].innerHTML === str)
        {
            iterator.style.backgroundColor = "orange";
            console.log(iterator.style);
        }
    }
}