const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');  //search class inout field

const generateTemplate = todo =>{  //just making our code more resueable
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                     <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                  </li>`;
    list.innerHTML += html;
}

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();  //add is name of formfield in html    //trim() removes any whitespaces before-after string
    console.log(todo);
    if(todo.length){   //if this is a +ve integer it evaluates it to true, now only spaces and empty cannot be send
    generateTemplate(todo);
    addForm.reset();   //resets the form when sent
    }
});

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){ 
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) =>{
    //console.log(term);
    //console.log(list.children);  //returns html collections so cant use array methods directly, so converting it into array
    //console.log(Array.from(list.children));
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))   //! if they dont return the term for hiding those todos
    .forEach((todo)=> todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))   //! if they dont return the term for hiding those todos
    .forEach((todo)=> todo.classList.remove('filtered'))


          
    
};
//key up event --> for searching
search.addEventListener('keyup',()=>{
    //console.log(e.target.value.trim());
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});


