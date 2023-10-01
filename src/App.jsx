import { useState } from 'react'
import './App.css'
import FlashcardDeck from './Components/FlashcardDeck'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1 className = "title">Study Tech Tips</h1>
        <FlashcardDeck/>
       </div>
    
  )
}

export default App
