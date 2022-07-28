import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {


  const { setUser } = useContext( UserContext );

  const handleClick = () => {
    setUser({
      id: 123,
      name: 'carlos',
      email: 'carlos23@gmail.com'
    })
  }

  return (
    <div>
        <h1> LoginScreen </h1>
        <hr/>

        <button 
          className="btn btn-primary"
          onClick={ handleClick }>
          Login
        </button>
    </div>
  )
}
