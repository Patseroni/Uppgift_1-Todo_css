const addTaskInput = document.querySelector("#addTask");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("ul");
const infoBox = document.querySelector("strong");
const nrOfcompleted = document.querySelector("#nrOfCompleted p");
const taskArray = [];
let counter = 0;



addBtn.addEventListener("click", function () {

    if (addTaskInput.value.length > 0) {
        infoBox.innerText = "";
    }
    else {
        infoBox.innerText = "You have to type something";
        return;
    }

    taskArray.push(addTaskInput.value);

    //create an li and add to the ul.
    const liElement = document.createElement("li");
    liElement.innerText = addTask.value;
    list.appendChild(liElement);

    const trashcan = document.createElement("span");
    trashcan.setAttribute("class", "trashcan");
    trashcan.innerHTML = "&#128465;";
    liElement.appendChild(trashcan);

    addTask.value = "";

    liElement.addEventListener("click", function () {

        if (liElement.getAttribute("class") == "completed") {
            liElement.setAttribute("class", "");
            counter--;
        }
        else {
            liElement.setAttribute("class", "completed");
            counter++;
        }
        nrOfcompleted.textContent = `Completed tasks: ${counter}`;

    });

    trashcan.addEventListener("click", function () {

        liElement.remove();
    });
});









