import React from 'react'
import style from './Header.module.css'
import { MdMenuBook } from "react-icons/md";
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'

const HeaderLogin = ({text}) => {
    return (
        <header className={style.header}>
            <nav className={style.navLogin}>
                <img className={style.logoOlimpia} src={Logo} alt='logo' />
                <div className={style.diagonal}></div>
                <Link className={style.btnLogin} to='/login'>{text}
                    <div>
                        <MdMenuBook size={30} />
                    </div>
                </Link>

            </nav>
        </header>
    )
}

export default HeaderLogin