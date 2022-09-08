import React from 'react'
import S from './CardEquipe.module.css'

const CardEquipe = (props) => {
  return (
    <div className={S.CardE}>
      <img className={S.imgE} src={props.src} alt="" />
      <h3 className={S.h3E}>{props.nome}</h3>
      <p className={S.pE}>{props.cargo}</p>
    </div>
  )
}

export default CardEquipe