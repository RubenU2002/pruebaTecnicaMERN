import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeSc from './screens/HomeSc'
import AgregarPersona from './screens/AgregarPersona'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeSc/>}/>
          <Route path='/agregarPersona' element={<AgregarPersona/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
