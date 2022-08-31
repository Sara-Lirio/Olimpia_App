import React from 'react'
import Header from '../../components/Header/Header'
import style from './Home.module.css'
import imageCard from '../../assets/imageCard.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={style.card}>
          <div className={style.text}>
            <h3>Organização e praticidade</h3>
            <h1>Livraria Olimpia</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facere voluptate a dolorem veritatis veniam. Illum facere
              aspernatur doloremque animi praesentium veniam nihil ea
              quidem repellat! Molestiae reiciendis sequi exercitationem
              tempore.</p>
            <div className={style.cadastros}>
              <Link to='/cadastroCliente' className={style.btnCliente}>Cadastrar Cliente</Link>
              <Link to='/cadastroLivro' className={style.btnLivro}>Cadastrar Livro</Link>
            </div>
          </div>
          <img src={imageCard} className={style.imgcard} />
        </section>
        <section>
          <h3 className={style.h3}>ADICIONADOS RECENTEMENTE</h3>
          <div className={style.books}>

          </div>
        </section>
      </main>
    </>
  )
}

export default Home