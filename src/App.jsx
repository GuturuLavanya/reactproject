import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <h1 style={{color:"red"}}>Hellow World</h1>
        <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
        <p>Flower image descriptions highlight vibrant colors, delicate petals, unique shapes (trumpet, cluster),
           symbolism (roses for love, sunflowers for longevity), 
           and settings (gardens, fields), using adjectives 
           like vibrant, fragrant, delicate, and exquisite to capture visual and sensory details.
           react is build userinterface
            </p>
        <button style={{border:"1px solid black"}}>click</button>
      </div>
    </>
  )
}

export default App
