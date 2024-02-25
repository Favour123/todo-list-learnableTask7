let popmessage2 =document.getElementById("popmessage");
let inputText = document.getElementById("inputText");
let todolist = document.getElementById("todolist");

let tasks = [];
function showToast(){
   //code to check if input is empty
   if (inputText.value.trim() === null || inputText.value ==="" ){
      ShowMessage(`<i class="fa-solid fa-circle-exclamation"></i> please enter a tasks before adding`);
   }else{
      tasks.push(inputText.value);
      displayTasks();
      ShowMessage(`<i class="fa-solid fa-circle-check "></i> Task  added sucesesfully`);
      inputText.value ="";
   }
}
//code to add tasks into a list and create button delete, with button update
function displayTasks(){
   todolist.innerHTML = "";
   tasks.forEach((task, index) => {
    const li =document.createElement("li");
    li.textContent= task;
 
    const updateButton= document.createElement("button");
    updateButton.classList.add("toast");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", () => updateTasks(index));
    const deleteButton= document.createElement("button");
    deleteButton.classList.add("toast1");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTasks(index));
//adding buttons to the li
    li.appendChild(updateButton);
    li.appendChild(deleteButton);

    todolist.appendChild(li);
   });
}
//for update tasks
function updateTasks(index){
   const newTasks =prompt("Enter new tasks");
   if( newTasks !== null){
    tasks[index] = newTasks;
    displayTasks();
    ShowMessage(`<i class="fa-solid fa-circle-check "></i> task updated sucessfully`);
   }
}
//for delete tasks
function deleteTasks(index){
   tasks.splice(index,1);
    displayTasks();
    ShowMessage(` <i class="fa-solid fa-circle-xmark"></i>task delected sucessfully`);
}
//control all displyed message
function ShowMessage(message){
   //created a class in popmessage
   let upper =document.createElement("div");
   upper.classList.add("yes");
   upper.innerHTML =message;
   popmessage2.appendChild(upper);

   //class for each message
   if(message.includes("delected" )){
     upper.classList.add("delete");
   }
   if(message.includes(" please" )){
      upper.classList.add("delete1");
    }
   if(message.includes("added")){
      upper.classList.add("add");
    }
    if(message.includes("updated")){
      upper.classList.add("add1");
    }
//time to pop out
   setTimeout(() => {
      upper.style.display= "none"; 
   }, 6000);
   }
