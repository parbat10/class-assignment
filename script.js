let todoArr=[]
const addBtn=document.querySelector("#addBtn")
const inputodo=document.querySelector("#inputTodo")
const ol=document.querySelector("#todoList")

function saveData(){
  localStorage.setItem("todos",todoArr)
}

addBtn.addEventListener("click",()=>{
  value=inputodo.value;

  let id=0
  const todo={
    id:id+1,
    text:value,
    completed:false
  }

  todoArr.push(todo)
  saveData();
  displayData();
  inputodo.value="";
})

function displayData(){
  ol.innerHTML=""
  todoArr.forEach(todo => {
    const li=document.createElement("li")

    const chkBox=document.createElement("input")
    chkBox.type="checkbox"
    chkBox.checked=todo.completed

    chkBox.addEventListener("change",()=>{
      todo.completed=chkBox.checked
      saveData()
    })
    const span=document.createElement("span")
    span.textContent=todo.text

    const delBtn=document.createElement("button")
    delBtn.textContent="Delete"

    delBtn.addEventListener("click",()=>{
      todoArr=todoArr.filter(i=>i.id!==todo.id)
      saveData()
      displayData()
    })

    li.append(chkBox,span,delBtn)
    ol.appendChild(li)
  });
  
 
}
displayData();