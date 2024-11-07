import { useState } from 'react'
import reactRocket from './assets/react-rocket.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactRocket} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>react-rocket</h1>
    </>
  )
}

export default App
