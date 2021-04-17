// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filerOption = document.querySelector('.filter-todo');

// event-Listeners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);
filerOption.addEventListener("click" ,filterTodo );

//Functions
function addTodo(event){
    //prevent from loading page again and again
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //creating a check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    completedButton.classList.add("complete-btn");
    //adding check button to div
    todoDiv.appendChild(completedButton);

    //creating a another trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    trashButton.classList.add("trash-btn");
    //adding trash button to div
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    //clear the todo inout value;
    todoInput.value="";
}

function deleteCheck(e){
        const  item = e.target;
        console.log(e.target);
        if(item.classList[0] === 'trash-btn'){
            const todo = item.parentElement;
            //Animation
            todo.classList.add("fall");
            
            todo.addEventListener('transitionend' , function(){
                todo.remove();
            });
            // todo.remove();
        }
        if(item.classList[0] === 'complete-btn'){
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
         
}

function filterTodo(e){
    const todos = todoList.childNodes;
    // for( e of todos){
    //     console.log(e);
    // }
   
todos.forEach(function (todo){
    // console.log(todo);
    switch(e.target.value){
        case "all":
            todo.style.display = 'flex';
            break;
        case "completed":
            if(todo.classList.contains("completed")){
                todo.style.display = 'flex';
            }else{
                todo.style.display = 'none';
            }
            break;
        case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
    }


});
}