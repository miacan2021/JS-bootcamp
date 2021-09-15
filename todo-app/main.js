const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filterTodo = {
    searchText:''
}
const renderTodos = function(todos, filterTodo){
   const filterTodos =  todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filterTodo.searchText.toLowerCase());
    });
    document.querySelector('#todos').innerHTML = '';
    filterTodos.forEach(todo => {
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.text;
        document.querySelector('#todos').appendChild( todoEl);
    });
}
renderTodos(todos, filterTodo);

document.querySelector('#search-todo').addEventListener('input', ((e) => {
    filterTodo.searchText = e.target.value;
    renderTodos(todos, filterTodo);
}));

const body = document.querySelector('body');
let leftNum = todos.filter(todo => !todo.completed);
const showLeftNum = document.createElement('h2');
showLeftNum.textContent = `You have ${leftNum.length} todos left.`;
body.appendChild(showLeftNum);

// for (let i in todos) {
//     const showTodos = document.createElement('p');
//     showTodos.textContent = todos[i].text;
//     body.appendChild(showTodos);
// }

document.querySelector('#add-todo').addEventListener('click', (() => console.log('from JS')));
document.querySelector('#input-todo').addEventListener('input', ((e) => console.log(e.target.value)))