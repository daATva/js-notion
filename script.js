const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

let FILTER = []

const notes = [
    {
        title:'собрать вещи',
        completed:false,
    } , 
    {
        title:'полить цветы',
        completed:true,
},]

function render(filteredNotes = notes) {
    listElement.innerHTML = '';
    if (filteredNotes.length === 0) {
        listElement.innerHTML = '<p>Нет элементов </p>';
    }
    for (let i = 0; i < filteredNotes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(filteredNotes[i], i));
    }
}
render()

inputElement.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();
    const filteredNotes = notes.filter((note) => {
        return note.title.includes(value);
    });
    FILTER = filteredNotes;
    render(filteredNotes);
});

createBtn.onclick =  function() {
    if(inputElement.value  === ''){
        return
    }
    const newNote = {
        title:inputElement.value,
        completed:false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
    
}

listElement.onclick = function(event) { 
    if(event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove'){
            notes.splice(index , 1)
        }
        render()
    }
}

function getNoteTemplate(note , index){
   return  `
    <li
    class="list-group-item d-flex justify-content-between align-items-center">
    <span class = "${note.completed ? 'text-decoration-line-through' : '' }">${note.title}</span>
    <span>
        <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-type="toggle" data-index="${index}">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
    </span>
  </li>
    `
}

// function filterContacts() {
//     let searchText = inputElement.value.toLowerCase();
//     if (searchText === '') {
//     //   notes = originalsNotes.slice();
//       console.log(661)

//     } else {
//         const copy = notes.map((key) =>{
//             console.log(key.title)
//         })
//         // Object.keys(notes).forEach((key) => {
//         //     console.log(notes[key]);
//         //   });
//         console.log(666)
//     }
//     render();
//     console.log(notes)
//   }
