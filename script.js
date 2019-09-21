'use strict';

let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let li;

function getInputValueEnter(key) {
    if(key.keycode === 13 ) {
        addNewItemInToDoList();
    }
}

function addNewItemInToDoList() {
    if(input.value.length > 0) {
        createElementLi();
        capitalizeInputValue();
        addInputValueInLi();
        insertNewLi();
        clearInput();
    }
}

    function createElementLi() {
        li = document.createElement("li");
    }

    function capitalizeInputValue() {
        input.value = input.value[0].toUpperCase + input.value.slice(1, input.value.length);
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

button.addEventListener("click", addNewItemInToDoList);

input.addEventListener("keypress", getInputValueEnter);