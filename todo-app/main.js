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

const body = document.querySelector('body');

// let leftNum = 0;
// const serchLeftNum = todos.forEach(todo => {
//     if (!todo.completed) {
//         leftNum += 1;
//     }
// })

let leftNum = todos.filter(todo => !todo.completed);

const showLeftNum = document.createElement('h2');
showLeftNum.textContent = `You have ${leftNum.length} todos left.`;
body.appendChild(showLeftNum);

for (let i in todos) {
    const showTodos = document.createElement('p');
    showTodos.textContent = todos[i].text;
    body.appendChild(showTodos);
}