import React from 'react'
import style from './Footer.module.css'
import { GrTwitter, GrLinkedin, GrLinkedinOption, GrMail, GrYoutube, GrInstagram} from "react-icons/gr";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.containerSocial}>
          <p className={style.social}>Redes Sociais</p>
          <div className={style.icons}>
            <TiSocialFacebookCircular size={30}/>
            <GrTwitter size={20}/>
            <GrLinkedinOption size={20}/>
            <GrMail size={20}/>
            <GrInstagram size={21}/>
          </div>
        </div>
    </footer>
  )
}

export default Footer