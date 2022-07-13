import React, {useState} from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../useEffect/effect.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter( 5000 );

    const [show, setShow] = useState(true);

    const memoProcesoPesado = (() => procesoPesado( counter ), [ counter ]);

  return (
    <div>
        <h1>Memo Hook</h1>
        <h3>Counter: <small> { counter } </small> </h3>
        <hr />

        <p> { memoProcesoPesado }</p>

        <button 
            className="btn btn-primary" 
            onClick={increment}
        >
            +1
        </button>

        <button
            className="btn btn-outline-success me-md-2"
            onClick={ () => {
                setShow(!show);
            }}
        >
            Show/hide { JSON.stringify(show)}
        </button>
    </div>
  )
}
