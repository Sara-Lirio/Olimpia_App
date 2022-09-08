import { Rating } from '@mui/material'
import React from 'react'
import style from './CardBooks.module.css'

const CardBooks = ({ imagem, idLivro, titulo, autor, qtdEstoque }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={imagem} className={style.img} alt="capa do livro"></img>
      </div>
      <p className={style.id}>id:{idLivro}</p>
      <p className={style.title}>{titulo}</p>
      <Rating name="customized-10" defaultValue={4} max={5} className={style.rating} />
      <p className={style.description}>{autor}</p>
      <p className={style.description}>Quantidade em Estoque: {qtdEstoque}</p>
      <button className={style.button}>Detalhes</button>
    </div>
  )
}

export default CardBooks