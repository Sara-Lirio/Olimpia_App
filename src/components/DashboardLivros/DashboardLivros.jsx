import { useEffect } from "react";
import { React, useState } from "react";
import { getLivros } from "../../service/livroApi";
import ItemLivros from "../ItemLivros/ItemLivros";


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
    <div>
      <section>
        {!!livros &&
          livros.map((livro, index) => {
            return (
              <ItemLivros 
              key={index}
                imagem={livro.imagem}
                idLivro={livro.idLivro}
                titulo={livro.titulo}
                autor={livro.autor}
                genero={livro.genero}
                formato={livro.formato}
                valor={livro.valor}
                idioma={livro.idioma}
                qtdEstoque={livro.qtdEstoque}
                numeroPaginas={livro.numeroPaginas}
                handleAtualizar={handleAtualizar}
              />
            );
          })}
      </section>
    </div>
  );
};

export default DashboardLivros;
