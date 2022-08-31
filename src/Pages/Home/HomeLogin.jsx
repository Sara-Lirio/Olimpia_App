import React from 'react'
import HeaderLogin from '../../components/Header/HeaderLogin'
import imag from '../../assets/ramo2.png'
import style from './Home.module.css'

const HomeLogin = () => {
    return (
        <>
            <HeaderLogin text='LOGIN' />
            <div className={style.image}>
                <div className={style.container}>
                    <p className={style.phase}>“O livro é uma extensão da memória e da imaginação”</p>
                    <p className={style.author}>Jorge Luís Borges</p>

                </div>
            </div>
            {/* <img src={imag}/> */}

        </>

    )
}

export default HomeLogin