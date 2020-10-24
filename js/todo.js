//Description Variables
const check = "fa-check-circle";
const uncheck = "fa-circle";
const crossed = "crossed";
const uncrossed = "uncrossed";
const input = document.getElementById("todoitem");
const outputelement = document.getElementById("output");

//Set Local Storage
let data = localStorage.getItem("list");

//Check If File Is In Local Storage
if (data) {
    items = JSON.parse(data);
    id = items.length;
    loaddata(items);
} else {
    items = [];
    id = 0;
}

//Load Array From Local Storage
function loaddata(array){
    array.forEach(function(piece){
        additem(piece.name, piece.id, piece.completed, piece.trash);
    });
}


//Enter Key Event Listener
document.addEventListener("keypress", function (e) {
    if (event.keyCode === 13){
        builditem();
    }
});


//Adds Items To Array    
function builditem () {    
    const name = input.value;
    if(name === ""){
        return false;
    }
    if(input){
        additem(name, id, false, false);
        
        items.push({
            name: name,
            id: id,
            completed: false,
            trash: false,
        });
        localStorage.setItem("list", JSON.stringify(items));
        id++
    }
    input.value = "";
}

//Prints Array To Screen
function additem(name, id, completed, trash) {
    if(trash){
        return;
    }
    
    const done = completed ? check : uncheck;
    const crossout = completed ? crossed : uncrossed;
    
    const li = `<li class="list" id=${id}><i class="far ${done}" onclick="complete()"></i> 
                <span class="${crossout}">${name}</span> 
                <i class="fas fa-trash-alt" onclick="removeitem()"></i>`;
    
    outputelement.insertAdjacentHTML("beforeend", li);
    
}

//Function To Mark Task Complete
function complete() {
    const element = event.target.parentElement;
    element.firstChild.classList.toggle(check);
    element.firstChild.classList.toggle(uncheck);
    element.querySelector("span").classList.toggle(crossed);
    element.querySelector("span").classList.toggle(uncrossed);
    items[element.id].completed = items[element.id].completed ? false : true;
    localStorage.setItem("list", JSON.stringify(items));
}

//Function To Delete Task
function removeitem() {
    const element = event.target.parentElement;
    items[element.id].trash = items[element.id].trash ? false : true;
    if(items[element.id].trash) {
        element.remove();
    }
    localStorage.setItem("list", JSON.stringify(items));
}


//Filter Function For Show Completed Tasks
function notactive(items) {
    return items.completed == true && items.trash == false;
}

function done() {
    const newitems = items.filter(notactive);
    outputelement.innerHTML = "";
    for (let i=0; i < newitems.length; i++){
        
        let li = `<li class="list" id=${newitems[i].id}><i class="far ${check}" onclick="complete()"></i> 
                <span class="${crossed}">${newitems[i].name}</span> 
                <i class="fas fa-trash-alt" onclick="removeitem()"></i>`;
        outputelement.insertAdjacentHTML("beforeend", li);
    }
}

//Filter Function For Show Active Tasks
function activeitem(items) {
    return items.completed == false && items.trash == false;
}

function active() {
    const newitems = items.filter(activeitem);
    outputelement.innerHTML = "";
    for (let i=0; i < newitems.length; i++){
        
        let li = `<li class="list" id=${newitems[i].id}><i class="far ${uncheck}" onclick="complete()"></i> 
                <span class="uncrossed">${newitems[i].name}</span> 
                <i class="fas fa-trash-alt" onclick="removetiem()"></i>`;
        outputelement.insertAdjacentHTML("beforeend", li);
    }
}

//Reload Array When View All Tasks Button Is Pressed
function showall() {
    outputelement.innerHTML = "";
    loaddata(items);
}

//Filter Function For Deleted Tasks
function delitem(items) {
    return items.trash == true;
}

function del() {
    const newitems = items.filter(delitem);
    let test = "";
    let test2 = "";
    outputelement.innerHTML = "";
    for (let i=0; i < newitems.length; i++){
        if (newitems[i].completed == true) {
        test = check;
        test2 = crossed;
        } else {
        test = uncheck;
        test2 = uncrossed;
        }
        
        let li = `<li class="list" id=${newitems[i].id}><i class="far ${test}" onclick="complete()"></i> 
                <span class="${test2}">${newitems[i].name}</span> 
                <i class="fas fa-undo" onclick="undo()"></i>`;
        outputelement.insertAdjacentHTML("beforeend", li);
    }
}

//Function To Reactivate Deleted Task
function undo() {
    const element = event.target.parentElement;
    items[element.id].trash = items[element.id].trash ? false : true;
    del();
    localStorage.setItem("list", JSON.stringify(items));
}



