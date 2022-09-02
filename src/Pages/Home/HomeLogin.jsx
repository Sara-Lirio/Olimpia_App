import React from 'react'
import HeaderLogin from '../../components/Header/HeaderLogin'
import style from './Home.module.css'

const HomeLogin = () => {
    return (
        <>
            <HeaderLogin/>
            <section className={style.image}>
                <div className={style.container}>
                    <p className={style.phase}>“O livro é uma extensão da memória e da imaginação”</p>
                    <p className={style.author}>Jorge Luís Borges</p>
                </div>
            </section>
            <section>
                {/* <p>A Livraria Olimpia é um gerenciador de livros e clientes. </p> */}
            </section>
        </>

    )
}

export default HomeLogin