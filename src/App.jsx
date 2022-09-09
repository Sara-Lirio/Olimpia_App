import './styles/reset.css'
import './styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Clientes from './Pages/Clientes/Clientes'
import Footer from './components/Footer/Footer'
import Livros from './Pages/Livros/Livros'
import Equipe from './Pages/Equipe/Equipe'
import CadastroCliente from './Pages/CadastroCliente/CadastroCliente'
import CadastroLivro from './Pages/CadastroLivro/CadastroLivro'
import HomeLogin from './Pages/HomeLogin/HomeLogin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLogin/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/livros' element={<Livros />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/equipe' element={<Equipe />} />
        <Route path='/cadastroCliente' element={<CadastroCliente />} />
        <Route path='/cadastroLivro' element={<CadastroLivro text='Cadastro'/>} />
        <Route path='/atualizaLivro/:idLivro' element={<CadastroLivro text='Atualiza' />} />
      </Routes>

      <Footer /> 
    </BrowserRouter>
  )
}

export default App
