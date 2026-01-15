import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setLogged] = useState<boolean>(false);
  return (

    <>
      {
        isLogged ? (
          <Home titulo='Componente Home' texto = 'Todos os caminhos levam a React'/>
      ) 
          : (
            <div>
              <h2>Login</h2>
              <button onClick={() => setLogged(true)}>Logar</button>
            </div>
          )
      }
    </>
  )
}

export default Login