const inputBox=document.getElementById("input_box");
const listContainer= document.getElementById("list-container");


function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }
 // .innerHTML eğerki bizim değerlerimiz html de yoksa , ben burdan html yazarak 
 //,htmld deki gibi değerleri burdan da oluşturabiliyorum.
 const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;
  listContainer.appendChild(li);
  inputBox.value = "";


const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");



checkbox.addEventListener('click', function () {
  li.classList.toggle("completed", checkbox.checked);
  updateCounters();
 });


 editBtn.addEventListener('click', function () {
  // prompt is displayed to dialoug box , asking that are you sure edit or not.
 const update=prompt("Edit task:" , taskSpan.textContent);
 if (update !== null){
    taskSpan.textContent= update;
    li.classList.remove("completed");
    checkbox.checked=false;
    updateCounters();
 }
 });

 deleteBtn.addEventListener('click' , function () {
  if(confirm("are you sure to delete this task?")){
    li.remove();
    updateCounters();
  }
 });


}

const completedCounter= document.getElementById("completed-counter");
const uncompletedCounter= document.getElementById("uncompleted-counter");

function updateCounters(){
  const completedTask= document.querySelectorAll(".completed").length;
  const uncompletedTask= document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent= completedTask;
  uncompletedCounter.textContent= uncompletedTask;
}





