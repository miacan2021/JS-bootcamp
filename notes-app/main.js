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



const filters = {
    searchText: ''
}
const renderNotes = function(notes, filters){
    const filterNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = '';

    filterNotes.forEach(function (note){
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
}
renderNotes(notes, filters);

document.querySelector('#remove-all').addEventListener('click',
    (
        () => {
            document.querySelectorAll('p').forEach(note => note.remove());
        })
)
document.querySelector('#create-note').addEventListener('click',
    (() => {
       console.log('create');
    }))

document.querySelector('#search-text').addEventListener('input', ((e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
}))