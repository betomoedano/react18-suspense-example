import { useState, Suspense } from 'react'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>My Suspense App</p> 
     <Suspense fallback={<p>loading...</p>}>
      <User />
     </Suspense>
    </>
  )
}

export default App
