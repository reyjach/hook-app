import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coodrs, setCoodrs] = useState({x:0,y:0});

    const { x, y } = coodrs;

    useEffect(() => {

        const mouseMove = (e) => {
            const coord = { x:e.x, y:e.y }
            setCoodrs(coord);
        }

        window.addEventListener("mousemove", mouseMove)
      
      return () => {
        window.removeEventListener("mousemove",mouseMove);
        
      }
    }, [])
    
  return (
    <>
        <h3>Eres genial</h3>
        <p> x:{ x }  y:{y}</p>
    </>
  )
}
