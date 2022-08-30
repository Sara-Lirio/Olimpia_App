import React from 'react'
import style from './Menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={style.menu}>
            <Link to='/' className={style.link}>Home</Link>
            <Link to='/livros' className={style.link}>Livros</Link>
            <Link to='/clientes' className={style.link}>Clientes</Link>
            <Link to='/equipe' className={style.link}>Equipe</Link>
            <Link to='/cadastroCliente' className={style.link}>Cadastro Clientes</Link>
            <Link to='/cadastroLivro' className={style.link}>Cadastro Livros</Link>
        </div>
    )
}

export default Menu