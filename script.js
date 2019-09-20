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

function capitalizeValue() {
    inputValue = inputValue[0].toUpperCase + inputValue.slice(1, inputValue.length);
}

function insertListElement() {
    ul.append(li)
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