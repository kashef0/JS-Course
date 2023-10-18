/*
"use strict";
/ //Definiera en variabel som hämta data lagrad på den lokala storage eller ger default värde som tom array till storeItem
let storeItems = JSON.parse(localStorage.getItem("items")) || [];
let listHolder = document.getElementById("todolist");
returnera storeItems elementer inuti article tag och som sträng.
listHolder.innerHTML = storeItems.map(function (Name) { return `<article>${Name}</article>` }).join("");
let userInput = document.getElementById("newtodo");
let raderaButton = document.getElementById("clearbutton");
let myButtonEl = document.getElementById("newtodobutton");

userInput.oninput = function () {
    function för att kolla om input större än fem chars visa upp ett meddelande 
    if (userInput.value.length < 4) {
        document.getElementById("message").innerHTML = "Ange minst fem tecken";
    }
    else if (userInput.value.length > 4) {
        document.getElementById("message").innerHTML = "";
    }

}
myButtonEl.addEventListener("click", addItem);
function addItem() {
    function blir kallad när det blir klickad på och lägga till elementer båda webbplats och lokal storage.
    let inputHolder = document.getElementById("newtodo");
    let inputValue = inputHolder.value;
    if (inputValue.length >= 5) {
        storeItems.push(inputValue);
        retunera elementer som article och visa elementer på webplatsen
        listHolder.innerHTML = storeItems.map(function (Name) { return `<article>${Name}</article>` }).join("");
        lagrar storeItems i webbläsarens lokala lagring
        localStorage.setItem("items", JSON.stringify(storeItems));
        inputHolder.value = "";
    }
}
eventlistener ansvarar för att rensa elemener och radera lagrad data i webläsaren lokala lagring 
raderaButton.addEventListener("click", radera);
function radera() {
    storeItems.length = 0;
    listHolder.innerHTML = "";
    localStorage.clear();
}
radera en specifik element från html-sida och data från lokal storage när blir klickad på av användaren
listHolder.addEventListener("click", removerFunction);
function removerFunction(remover) {
    if (remover.target.tagName === "ARTICLE") {
        remover.target.remove(remover);
    }
    storeItems = storeItems.filter((item) => (item !== remover.target.innerHTML))
    localStorage.setItem("items", JSON.stringify(storeItems));
}

*/