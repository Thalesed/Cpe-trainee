import { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Login from './pages/Login/Login.jsx'
import Routes from './routes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes/>
     </div>
  )
}

export default App
