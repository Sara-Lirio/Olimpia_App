import React from 'react'
import style from './Menu.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from "react-icons/ai";

const Menu = () => {
    return (
        <div className={style.menu}>
            <Link to='/' className={style.link}>Home</Link>
            <Link to='/livros' className={style.link}>Livros</Link>
            <Link to='/clientes' className={style.link}>Clientes</Link>
            <Link to='/equipe' className={style.link}>Equipe</Link>
            <div className={style.buttons}>
            <Link to='/cadastroCliente' className={style.btn}> Cadastrar Clientes</Link>
            <Link to='/cadastroLivro' className={style.btn}>Cadastro Livros</Link>
            </div>

        </div>
    )
}

export default Menu