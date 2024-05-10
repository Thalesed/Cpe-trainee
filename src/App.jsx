import { useState } from 'react'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cadastro />
    </>
  )
}

export default App
