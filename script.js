'use strict';

let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let li;



button.addEventListener("click", createNewItemOnClick);

input.addEventListener("keypress", createNewItemOnPress);