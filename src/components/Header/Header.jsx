import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

import Menu from '../Menu/Menu';

import { FiMenu } from "react-icons/fi"
import { BiSearchAlt } from "react-icons/bi"
import { VscClose } from "react-icons/vsc"
import { BiUserCircle } from  "react-icons/bi"

import Logo from '../../assets/logo.png'
import Logo1 from '../../assets/logo-removebg-preview.png'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => setMenu(!menu)

    return (
        <header className={style.headerLogin}>
            <nav className={style.nav}>
                <FiMenu size={30} className={style.btnMenu} onClick={handleMenu} />
                <img className={style.logo} src={Logo} alt='logo' />

                <form className={style.search}>
                        <input className={style.input} />
                        <BiSearchAlt size={20} />
                </form>
                
                <p className={style.user}>
                    <BiUserCircle size={28}/>
                    Usuário</p>
                <Link to='/' className={style.btnExit}>Sair</Link>
               
            </nav>
            <nav className={style.navPages}>
                <Link to='/home' className={style.link}>Home</Link>
                <Link to='/livros' className={style.link}>Livros</Link>
                <Link to='/clientes' className={style.link}>Clientes</Link>
                <Link to='/equipe' className={style.link}>Equipe</Link>
            </nav>
            <nav className={menu ? style.menuActive : style.menu}>
                <ul className={style.menuItens}>
                    <li className={style.btnClose}>
                        <img src={Logo1} alt='logo' className={style.logo1} />
                        <VscClose size={30} className={style.close} onClick={handleMenu} />
                    </li>
      
                    <li>
                        <Menu />
                    </li>
           
                </ul>
            </nav>
        </header>
    )
}

export default Header