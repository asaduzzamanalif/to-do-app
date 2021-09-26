"use strict";
let userInput = document.querySelector("#userInput");
let clickBtn = document.querySelector("#btn");
let todoLists = document.querySelector("#todo-list");

    // Create New Element
let ulItems = document.createElement("ul");

    // Append Child
todoLists.appendChild(ulItems);


function addListItems() {
    if ( userInput.value == "" ) {

    } else {
        let litItem = document.createElement("li");
        litItem.setAttribute("class", "li-item");
        litItem.innerText = userInput.value;
        let fontAwesome = document.createElement("span");
        fontAwesome.setAttribute("class", "fa fa-trash trash");
        litItem.appendChild(fontAwesome);
        ulItems.appendChild(litItem);
        userInput.value = "";
    }
}

clickBtn.addEventListener("click", addListItems);

ulItems.addEventListener("click", function(event) {
    event.target.parentNode.removeChild(event.target);
})
