import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFech } from '../../hooks/useFech';
import '../useEffect/effect.css';

export const Layount = () => {

    const pTag = useRef();

    const [boxZise, setBoxZise] = useState({});

    useLayoutEffect(() => {
      
        setBoxZise(pTag.current.getBoundingClientRect() );
      
    }, [pTag])

    const {counter, increment} = useCounter(1);

    const { data } = useFech( `https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote } = !!data && data[0]; // !! niega un null y se convierte en false

  return (
    <div>
        <h1>Layount Effect</h1>
        <hr />

        <blockquote className="blockquote position-relative">
            <p 
            className="mb-0 position-absolute top-0 start-50 translate-middle"
            ref={pTag}
            >
                {quote} </p>
        </blockquote>
        
        <pre>
            { JSON.stringify(boxZise ,null ,3)}
        </pre>

        <button 
            className="btn btn-primary mt-4" 
            onClick={increment}>
                Siguiente quote
        </button>

        
    </div>
  )
}
