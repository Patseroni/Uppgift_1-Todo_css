
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


    //create a remove-button with an img inside.
    const removeTaskBtn = document.createElement("button");
    const removeTaskImg = document.createElement("img");
    removeTaskImg.src = "trashcan.png";
    list.appendChild(removeTaskBtn);
    removeTaskBtn.appendChild(removeTaskImg);

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

    removeTaskBtn.addEventListener("click", function () {

        const taskArrayElement = taskArray.indexOf(liElement.innerText);
        
        //if it returns >=0, it means that the element exists in the array and matches the liElement-text. -1 means that it does not exist. 
        if (taskArrayElement >= 0) {     
            // 1 means delete only one element. 2 means delete that element and the element after.
            taskArray.splice(taskArrayElement, 1);
        }

        liElement.remove();
        removeTaskBtn.remove();
    });
});









