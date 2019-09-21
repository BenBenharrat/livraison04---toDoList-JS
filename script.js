'use strict';

let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let li;

function getInputValueEnter(key) {
    if(key.keycode === 13 ) {
        addNewItemInTodoList();
    }
}

function addNewItemInToDoList() {
    if(input.value.length > 0) {
        createElementLi();
        addInputValueInLi();
        insertNewLi();
        clearInput();
    }
}

    function createElementLi() {
        li = document.createElement("li");
    }

    function addInputValueInLi() {
        li.append(document.createTextNode(input.value));
    }

    function insertNewLi() {
        ul.insertAdjacentElement("beforeend", li);
    }

    function clearInput() {
        input.value = "";
    }

button.addEventListener("click", addNewItemInTodoList);

input.addEventListener("keypress", getInputValueEnter);