import { useState } from 'react'
import './css/App.css'
import Note from './components/Note'
import Logo from './components/Logo'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote]=useState('a new note..')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random()<0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = ()=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note=> note.important === true)

  return (
    <>
      <Logo />
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll?'important':'all'}
        </button>
      </div>
      <div className="card">
        <ul>
          {notesToShow.map(note1 =>
            <Note  key={note1.id} note={note1} />)            // <li key={note1.id}> {note1.content} </li>). key is explicit para.
          }  
        </ul>
      </div>

      <form onSubmit={addNote}>
          <input value={newNote}
              onChange = {handleNoteChange}
          />
          <button type="submit">save</button>
      </form>
    </>
  )
}

export default App