import React, { useState } from 'react';
import { MultiplesCutomerHook } from '../examples/MultiplesCutomerHook';
import '../useEffect/effect.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {


        setShow(!show);
    }

  return (
    <div>
        <h1> Real Example Ref</h1>
        <hr />

        { show && <MultiplesCutomerHook />}

        <button 
            className="btn btn-outline-primary mt-3"
            onClick={handleClick}
        >
                Show hide
        </button>
    </div>
  )
}
