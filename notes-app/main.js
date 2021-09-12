const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const body = document.querySelector('body');
const ps = document.querySelectorAll('p');

ps.forEach(p => p.textContent = "Change text");

const newP = document.createElement('p');
newP.textContent = "Add new p tag";
body.appendChild(newP);