'use strict';

let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let li;

function createElementLi() {
    li = document.createElement("li");
}

function clearInput() {
    input.value = "";
}

button.addEventListener("click", createNewItemOnClick);

input.addEventListener("keypress", createNewItemOnPress);