import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );

  
  
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
      </pre>

      <button 
      onClick={ () => setUser({ id:123, name: 'Emile', email:'emilejoel_05@hotmail.com' })}
      className="btn btn-dark">
        Establecer Usuario
      </button>

    </>
  )
}
