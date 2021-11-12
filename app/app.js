import '../scss/main.scss'

//import { TODO } './todo.js'


/* Read JSON file and fetch array of to-do list */
const url = "data.json"; //changed here from "data/data.json"
let xmlHttpObject = new XMLHttpRequest();
let inputArrJson = [];

//create function to call on load
xmlHttpObject.onreadystatechange = function () {
    //check status
    if (this.readyState == 4 && this.status == 200) {
        inputArrJson = JSON.parse(this.responseText);
        document.getElementById("addNewTaskBtn").addEventListener("click", addTaskVisible);

        document.getElementById("saveBtnId").addEventListener("click", addTask);
        displayTodos(inputArrJson);
        /* add event listeener When click of view, hide that task */
        viewButtonEevnt();
        /* add event listeener for cross delete  */
        crossButtonEevnt();
        /* When click of task name, mark the tasks complete */
        checkTodoDone();
        //document.getElementById("taskDueDate").value = moment().format('mm-dd-YYYY');

    }
};
xmlHttpObject.open("GET", url, true);
xmlHttpObject.send();


/**
 * This func will display Add Task fields form
 * when we click on button - add task, so it changes the property of this div to display:none othrwise block
 *  */
function addTaskVisible() {
    if (document.getElementById("addItemDiv").style.display == "block") {
        //change the display property to none, to it becomes visible
        document.getElementById("addItemDiv").style.display = "none";

    } else {
        //block display set poperty
        document.getElementById("addItemDiv").style.display = "block";
    }
}

/**
 * 
 * @param {Array} todoObjectArray array of todo task
 * Function will add all exisintg task to html page from json file
 * It reads json file, fetches ul item and then create li item then updates contents
 */
function displayTodos(todoObjectArray) {
    let ul = document.getElementById("todoUL");
    for (let i = 0; i < todoObjectArray.length; i++) {
        //create li
        let li = document.createElement("li");
        //add child which is textnode 
        li.appendChild(document.createTextNode(todoObjectArray[i].title));
        //set id
        li.id = todoObjectArray[i].id;
        //create sub divs for task properties
        let liDivChild = document.createElement("div");
        liDivChild.className = "todoDetails";
        liDivChild.id = "todoDetails" + i;
        li.appendChild(liDivChild);
        /* Is status of task complete */
        if (todoObjectArray[i].status == 'complete') {
            li.className = 'checked';
        }
        /* get task description and create it */
        let description = document.createElement("div");
        description.className = "todoDetailsDiv";
        description.appendChild(document.createTextNode("Description: " + todoObjectArray[i].description));
        liDivChild.appendChild(description);
        /* get task due date  and create it */
        let dueDate = document.createElement("div");
        dueDate.className = "todoDetailsDiv";
        dueDate.appendChild(document.createTextNode("Due Date: " + todoObjectArray[i].due_date));
        liDivChild.appendChild(dueDate);
        /* get task due time  and create it */
        let dueTime = document.createElement("div");
        dueTime.className = "todoDetailsDiv";
        dueTime.appendChild(document.createTextNode("Due Time: " + todoObjectArray[i].due_time));
        liDivChild.appendChild(dueTime);
        /* get task status  and create it */
        // let taskStatus = document.createElement("div");
        // taskStatus.className = "todoDetailsDiv";
        // taskStatus.appendChild(document.createTextNode("Status: " + todoObjectArray[i].status));
        // liDivChild.appendChild(taskStatus);
        /* Add view and delete */
        let viewSpan = document.createElement("span");
        let viewLbl = document.createTextNode("View Me!");
        viewSpan.className = "viewDetails";
        viewSpan.id = "viewDetails" + i;
        viewSpan.appendChild(viewLbl);
        li.appendChild(viewSpan);
        /* Add crossDelete icon */
        let span = document.createElement("SPAN");

        /*
             Symbol	×	
            Name	multiplication sign	
            Description	z notation cartesian product	
            Unicode number	U+00D7
        */
        let txt = document.createTextNode("\u00D7");
        span.className = "crossDelete";
        span.appendChild(txt);
        li.appendChild(span);
        ul.appendChild(li);
    }
}

/**
 *Strikeout to complete tasks
 *  */
function checkTodoDone() {
    // Add a "checked" symbol when clicking on a list item
    let list = document.getElementById("todoUL");
    list.addEventListener('click', function (event) {
        if (event.target.tagName == 'LI') {
            // alert('here'); //event.target.;
            event.target.classList.toggle('checked');
            // event.target.;
        }
    }, false);
}

/**
 * 
 * When click of View button hide the task details from html page
 * 
 * All elemnts with ViewDetails class will get this event onclick attach
 * 
 */
function viewButtonEevnt() {
    // Click on a cross button to remove the current list item

    let l = 0;
    let viewDetails = document.getElementsByClassName("viewDetails");

    for (let j = 0; j < viewDetails.length; j++) {

        /* Onclick of view,expand the view: view details of task */
        viewDetails[j].onclick = function () {
            let lidiv = this.parentElement;
            if (lidiv.querySelector(".todoDetails").style.display == "block") {
                lidiv.querySelector(".todoDetails").style.display = "none";
            } else {
                lidiv.querySelector(".todoDetails").style.display = "block";
            }
        }

    }
}

/**
 * 
 * When click of View button hide the task details from html page
 *
 * All elemets with class crossDelete will get this event onclick attach
 * 
 */
function crossButtonEevnt() {
    // Click on a cross button to remove the current list item
    let crossDelete = document.getElementsByClassName("crossDelete");
    let l = 0;

    for (let j = 0; j < crossDelete.length; j++) {

        /* Onclick of crossDelete, remove task */
        crossDelete[j].onclick = function () {
            if (confirm("Confirm removal?")) {
                //get parent li of this div and change display 
                let lidiv = this.parentElement;
                lidiv.style.display = "none";
            }
        }
    }
}


/**
 * 
 * Create a new task todo clicking "Click to Add Task" button
 * 
 */

function addTask() {
    //get all element
    let taskTitle = document.getElementById("taskTitle").value;
    let taskDesc = document.getElementById("taskDesc").value;
    let taskDueTime = document.getElementById("taskDueTime").value;
    let taskDueDate = document.getElementById("taskDueDate").value;
    // input task title is filled or not error checking
    if (taskTitle === '' || taskDesc === '' || taskDueDate === '' || taskDueTime === '') {
        alert("Check data entry, fill all!");
    } else {
        // Add it to internal task list */
        let todoNewArr = [{
            "title": taskTitle,
            "description": taskDesc,
            "due_date": taskDueDate,
            "due_time": taskDueTime
            //"status": "open"
        }, ];
        displayTodos(todoNewArr);
        //add event listener for cross delete 
        crossButtonEevnt();
        //add event listener for view
        viewButtonEevnt();
        //success
        alert("New ToDo added!");
    }

    //refresh the values

    document.getElementById('taskDueDate').value = "";
    document.getElementById('taskDesc').value = "";
    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDueTime').value = "";
}