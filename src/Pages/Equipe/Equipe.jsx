import React from 'react'
import Header from '../../components/Header/Header'
import CardEquipe from "../../components/CardEquipe/CardEquipe"
import S from './Equipe.module.css'
import equipeinside1 from '../../assets/imgequipe/equipeinside1.jpg'
import equipeinside2 from '../../assets/imgequipe/equipeinside2.jpg'
import equipeinside3 from '../../assets/imgequipe/equipeinside3.jpg'
import equipeinside4 from '../../assets/imgequipe/equipeinside4.jpg'
import equipeinside5 from '../../assets/imgequipe/equipeinside5.jpg'
import equipeolimp1 from '../../assets/imgequipe/equipeolimp1.jpg'
import equipeolimp2 from '../../assets/imgequipe/equipeolimp2.jpg'
import equipeolimp3 from '../../assets/imgequipe/equipeolimp3.jpg'
import equipeolimp4 from '../../assets/imgequipe/equipeolimp4.jpg'
import equipeolimp5 from '../../assets/imgequipe/equipeolimp5.jpg'

const Equipe = () => {
  return (
    <div>
      <Header />
    <h2 className={S.h2EqLivraria}>Equipe Livraria Olímpia</h2>
    <div className={S.card}>
    <div className={S.centro}>
    <CardEquipe nome="Bruna Martins" cargo="Gerente" src={equipeolimp1}/>
    <CardEquipe nome="Thales Gonçalves" cargo="Livreiro" src={equipeolimp2}/>
    <CardEquipe nome="Aline França" cargo="Especialista Catálogo" src={equipeolimp3}/>
    <CardEquipe nome="Luana Oliveira" cargo="Vendas" src={equipeolimp4}/>
    <CardEquipe nome="Eduardo Nascimento" cargo="Supervisor - Logística" src={equipeolimp5}/>
    </div>
    </div>
    <div className={S.line}>
                <div className={S.line1}></div>
                <div className={S.line2}></div>
    </div>
    <h2 className={S.h2EqInside}>Equipe Inside Tech</h2>
    <div className={S.card}>
    <div className={S.centro}>
    <a href="https://www.linkedin.com/in/barbara-guimaraes-de-camargo/">
    <CardEquipe nome="Bárbara Guimarães" cargo="Desenvolvedora FullStack" src={equipeinside1}/>
    </a>
    <a href="https://www.linkedin.com/in/ester-messias/">
    <CardEquipe nome="Ester Messias" cargo="Desenvolvedora FullStack" src={equipeinside4}/>
    </a>
    <a href="https://www.linkedin.com/in/liliana-adalgiza-a163b1a2/">
    <CardEquipe nome="Liliana Adalgiza" cargo="Desenvolvedora FullStack" src={equipeinside5}/>
    </a>
    <a href="https://www.linkedin.com/in/nuchoa/">
    <CardEquipe nome="Nathalia Uchôa" cargo="Desenvolvedora FullStack" src={equipeinside2}/>
    </a>
    <a href="https://www.linkedin.com/in/saralirio/">
    <CardEquipe nome="Sara Lirio" cargo="Desenvolvedora FullStack" src={equipeinside3}/>
    </a>
    </div>
    </div>
    </div>
  )
}

export default Equipe