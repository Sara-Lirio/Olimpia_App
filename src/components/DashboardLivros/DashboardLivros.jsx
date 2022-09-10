import { useEffect } from 'react';
import { React, useState } from 'react';
import { getLivros } from '../../service/livroApi';
import ItemLivros from '../ItemLivros/ItemLivros';
import Load from '../Load/Load';
import Pesquisa from '../../components/Pesquisar/Pesquisar';
import { Search } from '../../styles/global';
import Label from '../Label/Label';
import { width } from '@mui/system';

const DashboardLivros = () => {
  const [livros, setLivros] = useState([]);
  const [atualizar, setAtualizar] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  async function requisicao() {
    const response = await getLivros();
    setLivros(response);
    setLivrosFiltro(response);
  }

  function handleAtualizar() {
    setAtualizar(true);
  }

  useEffect(() => {
    setTimeout(() => {
      requisicao();
      setRemoveLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (atualizar === true) {
      requisicao();
      setAtualizar(false);
    }
  }, [atualizar]);

  const [livrosFiltro, setLivrosFiltro] = useState([]);

  function handleSearch(data) {
    const termo = data.target.value;
    const livrosFiltro = livros.filter((livros) =>
      livros.titulo.toLowerCase().includes(termo),
    );
    setLivrosFiltro(livrosFiltro);
  }

  return (
    <div>
      <Search>
        <Label texto="Filtrar:" />
        <Pesquisa onChange={handleSearch} />
      </Search>
      <section>
        {!!livros &&
          livrosFiltro.map((livro, index) => {
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
        {!removeLoading && <Load />}
      </section>
    </div>
  );
};

export default DashboardLivros;
