let button = document.querySelector("button");
let input = document.querySelector("input");
let inputValue = input.value;
let ul = document.querySelector("ul");
let li = document.createElement("li");

function getInputLength() {
    return input.value.length;
}

function isInputEmpty() {
    return ( getInputLength() == 0) ? true : false;
}

function capitalizeValue() {
    inputValue = inputValue[0].toUpperCase + inputValue.slice(1, inputValue.length);
}

function insertListElement() {
    ul.append(li)
}
function insertTextNode() {
    li.append(capitalizeValue())
}

