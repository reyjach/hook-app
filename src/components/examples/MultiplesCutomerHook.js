import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFech } from '../../hooks/useFech';
import '../useEffect/effect.css';

export const MultiplesCutomerHook = () => {

    const {counter, increment} = useCounter(1)

    const {loading, data} = useFech( `https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author,quote} = !!data && data[0]; // !! niega un null y se convierte en false

  return (
    <div>
        <h1>The Breaking Bad</h1>
        <hr />

        { loading 
        ? (
            <div className="alert alert-info text-center">
                loading...
            </div>
        ) : (
            <blockquote className="blockquote position-relative">
                <p className="mb-0 position-absolute top-0 start-50 translate-middle"> {quote} </p>
                <footer className="blockquote-footer position-absolute top-50 start-100 translate-middle"> {author} </footer>
            </blockquote>
        )
        }

        <button 
            className="btn btn-primary mt-4" 
            onClick={increment}>
                Siguiente quote
        </button>

        
    </div>
  )
}
