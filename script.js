'use strict';

let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let li;

function getInputLength() {
    return input.value.length;
}

function isInputEmpty() {
    return ( getInputLength() == 0) ? true : false;
}

function capitalizeValue() {
    return input.value[0].toUpperCase + input.value.slice(1, input.value.length);
}

function createListElement() {
    li = document.createElement("li");
}

function insertListElement() {
    ul.append(createListElement())
}
function insertTextNode() {
    li.append(capitalizeValue())
}

function createNewItemOnClick() {
    if (isInputEmpty == false) {
        insertListElement();
        insertTextNode();
        inputValue = "";
    }
}

function createNewItemOnPress(event) {
    if (isInputEmpty == false && event.keyCode == 13) {
        createNewItemOnClick()
    }
}

button.addEventListener("click", createNewItemOnClick);

input.addEventListener("keypress", createNewItemOnPress);