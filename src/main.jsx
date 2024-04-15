import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'
import './css/index.css'

// const notes = [
//   {id: 1,content: 'The decline has resulted in a 19 P/E ratio and a 4.35% dividend yield. Some analysts believe the bottom is in for UPS stock.',important: true},
//   {id: 2,content: 'MSFT has been giving out dividends and growing them for 19 consecutive years.',important: false},
//   {id: 3,content: 'As conflicted as our judgements might be about Israel’s conduct of its war in Gaza, there should be no ambiguity about our condemnation of Iran’s attack on Israel. ',important: true}
// ]

// axios.get('http://localhost:3001/notes').then(response =>{
//   const notes = response.data
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
// })

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
