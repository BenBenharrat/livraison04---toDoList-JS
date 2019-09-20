let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.createElement("li");

function getInputLength() {
    return input.value.length;
}

function isInputEmpty() {
    return ( getInputLength() == 0) ? true : false;
}


