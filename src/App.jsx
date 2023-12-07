import './App.css'
import { Board } from "./components/Board/Board"
import {useState} from 'react'

function App() {

  // const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return "X";
      } else {
        return value
      }
    })

    setBoard(updatedBoard)
  }

  return (
    <>
      <Board board={board} onClick={handleBoxClick} />
    </>
  )
}

export default App
