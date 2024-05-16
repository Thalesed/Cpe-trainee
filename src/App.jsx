import { useState } from 'react'
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
