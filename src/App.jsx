import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/src/assets/vite.svg'
import './css/App.css'
import Note from './components/Note'


const App = ({notes}) => {
  return (
    <>
      <div>
        <a href="#" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /></a>
        <a href="#" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /></a>
      </div>
      <h1>Notes</h1>
      
      <div className="card">
        <ul>
          {/* <li>{notes[0].content}</li>
          <li>{notes[1].content}</li>
          <li>{notes[2].content}</li> */}
          {notes.map(note1 => 
            // <li key={note1.id}> {note1.content} </li>)
            <Note  key={note1.id} note={note1} />)
          }  
        </ul>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App