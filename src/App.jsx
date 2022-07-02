import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()

  const handleClick = useCallback(() => {
    console.log(count)
  })
  const handleChange = useCallback((element) => {
    setCount(element.target.value)
  })

  return (
    <div className="App">
      <input
        type="text"
        name="log"
        onChange={handleChange}
      >
      </input>
      <button
        onClick={handleClick}
      >
        Aperte aqui
      </button>
      <div>{count}</div>
    </div>
  )
}

export default App
