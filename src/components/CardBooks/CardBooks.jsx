import React from 'react'
import style from './CardBooks.module.css'

const CardBooks = () => {
  return (
    <div className={style.card}>
        <div className={style.image}>

        </div>
        <p className={style.title}>Livro</p>
        <p className={style.description}>Lorem ipsum dolor sit amet consectetur,
             adipisicing elit.</p>
        <button className={style.button}>Detalhes</button>
    </div>
  )
}

export default CardBooks