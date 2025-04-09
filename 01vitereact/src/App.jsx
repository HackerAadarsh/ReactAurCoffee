import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  const Element = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    }, 
    children: 'Click here to go to Google',
}

  return (
   <h1>Chai or React with Vite |  Aadarsh Mishra </h1>
  )
}

export default App
