import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { HookApp } from './HookApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
);


