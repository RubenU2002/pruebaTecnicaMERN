import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeSc from './screens/HomeSc'
import AgregarPersona from './screens/AgregarPersona'
import EliminarPersona from './screens/EliminarPersona'
import VerPersonas from './screens/VerPersonas'
import ActualizarPersona from './screens/ActualizarPersona'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeSc/>}/>
          <Route path='/agregarPersona' element={<AgregarPersona/>}/>
          <Route path='/eliminarPersona' element={<EliminarPersona/>}/>
          <Route path='/verPersonas' element={<VerPersonas/>}/>
          <Route path='/actualizarPersona' element={<ActualizarPersona/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
