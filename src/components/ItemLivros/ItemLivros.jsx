import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { deletaLivro } from "../../service/livroApi";
import ModalDelLivros from "../ModalDelLivros/ModalDelLivros";
import S from "./ItemLivros.module.css";


const ItemLivros = ({
  imagem,
  idLivro,
  titulo,
  autor,
  genero,
  formato,
  valor,
  idioma,
  qtdEstoque,
  numeroPaginas,
  handleAtualizar,
}) => {
  const navigate = useNavigate();
  const [openDelete, setOpenDelete] = useState(false);

  function abrirModal() {
    setOpenDelete(true);
  }

  function fecharModal() {
    setOpenDelete(false);
  }

  async function delLivro() {
   await deletaLivro(idLivro);
    fecharModal();
    handleAtualizar(true);
  }

  return (
    <>
    <section className={S.livrosContainer}>
      <div className={S.cardLivro}>
        <div id={S.imagem}>
          <img src={imagem} alt="capa do livro"></img>
          <p>id:{idLivro}</p>
        </div>
        <div id={S.info}>
          <h1>{titulo}</h1>
          <p>Autor/a: {autor}</p>
          <p>Gênero: {genero}</p>
          <p>Formato:{formato}</p>
          <p>Preço: R${valor}</p>
          <p>Idioma: {idioma}</p>
          <p>Quantidade em Estoque: {qtdEstoque}</p>
          <p>Número de Páginas: {numeroPaginas}</p>
        </div>
        <div id={S.icons}>
          <BsPencilSquare
            size={25}
            onClick={() => navigate(`/editarLivro/${idLivro}`)}
          />
          <MdDelete size={30} onClick={abrirModal} />
        </div>
      </div>
      </section>

      <ModalDelLivros
        open={openDelete}
        handleClose={fecharModal}
        onClick={delLivro}
        fecharModal={fecharModal}
      />


    </>
  );
};

export default ItemLivros;
