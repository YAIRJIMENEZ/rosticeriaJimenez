import React from 'react'
import './App.css'
import { Footer } from './Footer/Footer'
import logo from './images/logo.png'
import { AppRouter } from './routers/appRouter'
export const Main = () => {
    return (
        <div className="containerLogo" >
             <img src={logo}></img>
             <AppRouter></AppRouter>
        </div>
    )
}
