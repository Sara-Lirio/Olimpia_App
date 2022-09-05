import React from 'react'
import style from './Footer.module.css'
import { GrTwitter, GrLinkedinOption, GrMail, GrInstagram } from "react-icons/gr";
import { TiSocialFacebookCircular } from "react-icons/ti";
import logo from '../../assets/logoFooter.png'
import appstore from '../../assets/appstore.png'
import playstore from '../../assets/playstore.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={logo} className={style.logo} />

      <p  className={style.frase}>" A verdadeira liberdade encontramos na leitura de um bom livro que nos remete <br/>a lugares lindos e, por vezes, distantes da realidade. " </p>


      <div className={style.icons}>
        <TiSocialFacebookCircular size={30} />
        <GrTwitter size={20} />
        <GrLinkedinOption size={20} />
        <GrMail size={20} />
        <GrInstagram size={21} />
      </div>

      <div  className={style.apps}>
        <img src={playstore} className={style.appstore}/>
        <img src={appstore} className={style.appstore}/>
      </div>
      <p className={style.copyright}>@ 2022 Livraria Olimpia. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer