import { useState } from "react"

function App() {
  const [contador, setContador] = useState(0);
  function handleClick() {
    
    setContador(contador + 1)
  }
  function handleClick2() {
    
    setContador(contador - 1)
  }
    return (
      <>
      <h1>{contador}</h1>
      <button onClick={handleClick}>clique aqui para aumentar o contador</button>
      <button onClick={handleClick2}>clique aqui para reduzir o contador</button>
      <h1>teste</h1>
      </>
    )
  }

export default App
