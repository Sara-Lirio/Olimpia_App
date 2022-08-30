import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Clientes from './Pages/Clientes/Clientes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Livros from './Pages/Livros/Livros'
import Equipe from './Pages/Equipe/Equipe'
import CadastroCliente from './Pages/CadastroCliente/CadastroCliente'
import CadastroLivro from './Pages/CadastroLivro/CadastroLivro'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/livros' element={<Livros />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/equipe' element={<Equipe />} />
        <Route path='/cadastroCliente' element={<CadastroCliente />} />
        <Route path='/cadastroLivro' element={<CadastroLivro />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
