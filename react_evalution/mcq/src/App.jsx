import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MCQ } from './components/MCQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MCQ/>
    </>
  )
}

export default App
