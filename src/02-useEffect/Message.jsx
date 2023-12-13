import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0})

useEffect(() => {

  const onMousemove = ({x, y }) => {
    // const coords = {x, y };
    setCoords( { x, y })
  }
  
  window.addEventListener( 'mousemove', onMousemove )

  return () => {

    window.removeEventListener( 'mousemove', onMousemove)
    
  }
}, [])




  return (
    <>
    <h3>El susuario ya existe</h3>

    {JSON.stringify( coords )}


    </>
  )
}
