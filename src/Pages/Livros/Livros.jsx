import React from "react";
import Header from "../../components/Header/Header";
import DashboardLivros from "../../components/DashboardLivros/DashboardLivros";
import S from "./Livros.module.css";
import { BiBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const Livros = () => {


  return (
    <div>
      <Header />
      <section className={S.container}>
        <div className={S.introContainer}>
          <h1>Livros</h1>
          <div>
            <input type="text" className={S.inputLivro} placeholder="Buscar livro..."/>
          </div>
          <div className={S.iconPlus}>
            <Link to='/cadastroLivro'>
              <BiBookAdd size={30}/>
            </ Link>
          </div>
        </div>
        <DashboardLivros />
      </section>
    </div>
  )
};

export default Livros;
