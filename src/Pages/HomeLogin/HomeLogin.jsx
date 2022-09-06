import React from 'react'
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import style from './HomeLogin.module.css'
import cel from '../../assets/cel.png'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import { Link } from 'react-router-dom'

const HomeLogin = () => {
    return (
        <>
            <HeaderLogin />
            <section className={style.image}>
                <div className={style.container}>
                    <p className={style.phase}>“O livro é uma extensão da memória e da imaginação”</p>
                    <p className={style.author}>Jorge Luís Borges</p>
                </div>
            </section>
            <div className={style.line}>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
            </div>
            <section className={style.main}>
                <h3 className={style.subtitle}>Organização, segurança e praticidade</h3>

                <p className={style.text}>A Livraria Olímpia possue um gerenciador de livros e clientes.
                    Aqui os dados dos seus clientes ficam seguros e organizados
                    (Seguindo a Lei nº 13.709/2018, LGPD).
                    <br /><br />
                    Os livros são cadastrados e ficam de fácil acesso e ótima visualização
                    otimizando o tempo de procura.
                    <br /><br />
                    Entre em contato em nossos canais de atendimento para maiores dúvidas
                    e cadastramento. </p>

                <div className={style.app}>
                    <img src={appstore} className={style.playstore} />
                    <img src={playstore} className={style.playstore} />
                </div>


                <img src={cel} className={style.cel} />


            </section>
        </>

    )
}

export default HomeLogin