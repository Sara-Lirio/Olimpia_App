import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cadastro from './Pages/Cadastro/Cadastro'
import Clientes from './Pages/Clientes/Clientes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro/>} /> 
        <Route path='/clientes' element={<Clientes/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
