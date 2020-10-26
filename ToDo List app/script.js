// selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

// event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


// function

function addTodo(event){
    event.preventDefault();

    // todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo")
    // create Li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // cheack mark button
    const completButton=document.createElement('button');
    completButton.innerHTML=('<i class="fas fa-check"></i>');
    completButton.classList.add('complet-button');
    todoDiv.appendChild(completButton);

    // Trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML=('<i class="fas fa-trash"></i>');
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    // append to List
    todoList.append(todoDiv)
    // clean todo invot value space 
    todoInput.value="";


}

function deleteCheck(e){
    const item = e.target;
    // console.log(item);

    // delete todo
    if (item.classList[0] === 'trash-button'){
        const todo=item.parentElement;
        // todo.remove(); 
        //Animation 
        todo.classList.add("fall")
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }
    if (item.classList[0]==='complet-button'){
        const todo=item.parentElement;
        todo.classList.toggle('complet')


    }
}