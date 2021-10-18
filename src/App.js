import './App.css';
import Board from './components/Board';
import Editable from './components/Editable';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [Boards, setBoards] = useState([
    { id: Date.now(), title: "To Do", cards: [{ id: Date.now() * Math.random() * 3, title: "ExpressJS" }, { id: Date.now() * Math.random() * 2, title: 'NodeJS' }] },
    { id: Date.now() * Math.random() * 2, title: "In Progress", cards: [{ id: Date.now() * Math.random() * 4, title: "MongoDB" }] },
    { id: Date.now() * Math.random(), title: "Completed", cards: [{ id: Date.now() * Math.random() * 9, title: "React" }, { id: Date.now() * Math.random() * 2, title: 'CSS' }, { id: Date.now() * Math.random() * 2, title: 'JS' }] }
  ])

  return (
    <div className="App">
      <Navbar />
      <div className='todo'>
        <div className='todo_boards'>
          {Boards?.map(item =>
            <Board key={item.id} Boards={Boards} setBoards={setBoards} thisBoard={item} />
          )}
          <Editable Boards={Boards} setBoards={setBoards} call={"board"} />
        </div>
      </div>
    </div>
  )
}
export default App;
