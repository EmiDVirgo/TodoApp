import { useEffect, } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const {formState, onInputChange, email, password, username, onResetForm} = useForm({
    
      username: "",
      email: "",
      password: ""
    
  })

  // const { username, email, password } = formState

  

  // useEffect(() => {
  //   // console.log("useEffect called!!");
  // }, []);
  
  // useEffect(() => {
  //   // console.log("formState changed!!");
  // }, [formState]);

  // useEffect(() => {
  //   // console.log("email changed!!");
  // }, [ email ]);

  // useEffect(() => {
  //   // console.log("username changed!!");
  // }, [ username ]);


  return (
    <>
      <h1>Formulario con Hook</h1>
      <hr />

      <input type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
          ></input>
          

          <input
          type="email"
          className="form-control mt-2"
          placeholder="emilejoel_05@hotmail.com"
          name="email"
          value={email}
          onChange={onInputChange}
          ></input>

          <input
          type="password"
          className="form-control mt-2"
          placeholder="contraseña"
          name="password"
          value={password}
          onChange={onInputChange}
          ></input>


          <button className="btn btn-dark mt-2" onClick={onResetForm}>Borrar</button>
    
   
    </>
  )
}
