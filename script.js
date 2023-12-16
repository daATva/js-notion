
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
    {
        title:'собрать вещи',
        completed:false,
    } , 
    {
        title:'полить цветы',
        completed:true,
},]

function render(){
    listElement.innerHTML = ''
    for(let i = 0; i < notes.length; i++){
     listElement.insertAdjacentHTML('beforeend' ,getNoteTemplate(notes[i] , i ))
    }    

}
render()

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



function getNoteTemplate(note , index){
  
   return  `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
>
    <span class = "${note.completed ? 'text-decoration-line-through' : '' }">${note.title}</span>
    <span>
        <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
    </span>
  </li>
    `
}



