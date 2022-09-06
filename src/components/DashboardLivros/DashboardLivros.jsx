import { useEffect } from "react";
import { React, useState } from "react";
import { getLivros } from "../../service/livroApi";
import ItemLivros from "../ItemLivros/ItemLivros";
import S from "./DashboardLivros.module.css";

const DashboardLivros = () => {
  const [livros, setLivros] = useState([]);
  const [atualizar, setAtualizar] = useState(false);

  async function requisicao() {
    const response = await getLivros();
    setLivros(response);
  }

  function handleAtualizar() {
    setAtualizar(true);
  }

  useEffect(() => {
    requisicao();
  }, []);

  useEffect(() => {
    if (atualizar === true) {
      requisicao();
      setAtualizar(false);
    }
  }, [atualizar]);

  return (
    <div className={S.livrosContainer}>
      <section>
        {!!livros &&
          livros.map((livro) => {
            return (
              <ItemLivros
                imagem={livro.imagem}
                idLivro={livro.idLivro}
                titulo={livro.titulo}
                autor={livro.autor}
                genero={livro.genero}
                formato={livro.formato}
                valor={livro.valor}
                idioma={livro.idioma}
                qtdEstoque={livro.qtdEstoque}
                nPaginas={livro.nPaginas}
                handleAtualizar={handleAtualizar}
              />
            );
          })}
      </section>

    </div>
  );
};

export default DashboardLivros;
