const addTaskInput = document.querySelector("#addTask");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("ul");
const infoBox = document.querySelector("strong");
const nrOfcompleted = document.querySelector("#nrOfCompleted p");
const taskArray = [];
let counter = 0;

nrOfcompleted.textContent = `${counter} completed`;

addBtn.addEventListener("click", function () {

    if (addTaskInput.value.length > 0) {
        infoBox.innerText = "";
    }
    else {
        infoBox.innerText = "You have to type something";
        return;
    }

    //Separating the li and trashcan by placing the text in one span and the trashcan in another.
    //create an li and add to the ul and span.
    const liElement = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.setAttribute("class", "textSpan");
    
    list.appendChild(liElement);
    liElement.appendChild(textSpan);

    textSpan.innerText = addTask.value;
    

    const trashcan = document.createElement("span");
    trashcan.setAttribute("class", "trashcan");
    trashcan.innerHTML = "&#128465;";
    liElement.appendChild(trashcan);

    addTask.value = "";

    textSpan.addEventListener("click", function () {

        if (textSpan.getAttribute("class") == "completed") {
            textSpan.setAttribute("class", "");
            counter--;
        }
        else {
            textSpan.setAttribute("class", "completed");
            counter++;
        }
        nrOfcompleted.textContent = `${counter} completed`;

    });

    trashcan.addEventListener("click", function () {
        
        liElement.remove();
    });
});









