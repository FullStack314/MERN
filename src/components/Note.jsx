const Note = ({ note, toggleImportance }) => {
  const label = note.import?'make not import':'make important'
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note