import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeSc from './screens/HomeSc'
import AgregarPersona from './screens/AgregarPersona'
import EliminarPersona from './screens/EliminarPersona'
import VerPersonas from './screens/VerPersonas'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeSc/>}/>
          <Route path='/agregarPersona' element={<AgregarPersona/>}/>
          <Route path='/EliminarPersona' element={<EliminarPersona/>}/>
          <Route path='/verPersonas' element={<VerPersonas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
