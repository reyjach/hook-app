import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
  return (
    <Router>
        
        <NavBar></NavBar>
        <div className="container">
            <Routes>
                <Route index path="/about" element={<AboutScreen />}/>

                <Route index path="/login" element={<LoginScreen />}/>

                <Route index path="/" element={<HomeScreen />} />

                <Route path="*" element={<HomeScreen />} />

            </Routes>
        </div>
    </Router>
  )
}
