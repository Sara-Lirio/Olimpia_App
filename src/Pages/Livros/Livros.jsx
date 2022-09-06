import { Button, Table } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import DashboardLivros from "../../components/DashboardLivros/DashboardLivros";
import { AiOutlinePlusCircle } from "react-icons/ai";
import S from "./Livros.module.css";
import { BiBookAdd } from "react-icons/bi";

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
            <BiBookAdd size={30} />
          </div>
        </div>
        <DashboardLivros />
      </section>
    </div>
  );
};

export default Livros;
