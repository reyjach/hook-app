import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const users = {
    id: 123,
    name: 'carlos',
    email: 'carlos23@gmail.com'
  }

  const { user, setUser } = useContext( UserContext );

  return (
    <div>
        <h1> LoginScreen </h1>
        <hr/>

        <button 
          className="btn btn-primary"
          onClick={ () => setUser({
            ...user,
            users
          })}>
          Login
        </button>
    </div>
  )
}
