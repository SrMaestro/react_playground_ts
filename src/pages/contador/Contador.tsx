import { useState } from "react"

function Contador() {

  const [valor, setValor] = useState<number>(0);
  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor inica e : {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Icrementar</button>
    </div>
  )
}

export default Contador