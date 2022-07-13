import React, { useRef } from 'react';
import '../useEffect/effect.css';

export const FocusScreem = () => {

    const inputRef = useRef();

    const handleClick = () => {


        inputRef.current.select();
    }

  return (
    <div>
        <h1>Focus Scren</h1>
        <hr />

        <input
            ref={inputRef}
            className="form-control"
            placeholder="Tu nombre"
        />

        <button 
            className="btn btn-outline-primary mt-5"
            onClick={ handleClick }>
                Focuss
        </button>
    </div>
  )
}
