import { useEffect } from "react";
import { React, useState } from "react";
import { getLivros } from "../../service/livroApi";
import ItemLivros from "../ItemLivros/ItemLivros";
import S from "./DashboardLivros.module.css";

const DashboardLivros = () => {
  const [name, setName] = useState("");
  const [livros, setLivros] = useState([]);
  const [atualizar, setAtualizar] = useState(false);
  // const [modalAction, setModalAction] = useState({
  //   postLivro: false,
  //   editarLivro: false,
  //   deletarLivro: false,
  // });

  async function requisicao() {
    const response = await getLivros();
    setLivros(response);
  }

  function handleAtualizar() {
    setAtualizar(true);
  }

  // const handleAbrirModal = (key) => {
  //   modalAction[key]
  //     ? setModal({ ...modalAction, [key]: false })
  //     : setModal({ ...modalAction, [key]: true });
  // };

  // async function postLivro() {
  //   await cadastrarLivro();
  //   setAtualizar(true);
  //   handleAbrirModal("postLivro");
  // }

  // const hookAtualizaLivro = (idLivro) => {
  //   setLivros({ idLivro: idLivro });
  //   handleAbrirModal("editarLivro");
  // };

  // async function atualizarLivro() {
  //   await putLivro(livro.idLivro, novoLivro);
  //   handleAbrirModal("editarLivro");
  //   setAtualizar(true);
  // }

  // const hookDeletaLivro = (itemLivro) => {
  //   setLivros({
  //     idLivro: itemLivro.idLivro,
  //     imagem: itemLivro.imagem,
  //     titulo: itemLivro.titulo,
  //     autor: itemLivro.autor,
  //     genero: itemLivro.genero,
  //     formato: itemLivro.formato,
  //     valor: itemLivro.valor,
  //     idioma: itemLivro.idioma,
  //     qtdEstoque: itemLivro.qtdEstoque,
  //     nPaginas: itemLivro.nPaginas,
  //   });
  //   handleAbrirModal("deletarLivro");
  // };

  // async function deletaLivro(idLivro) {
  //   await deletaLivro(idLivro);
  //   handleAbrirModal("deletarLivro");
  //   setAtualizar(true);
  // }

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
      {/* <Modal
          open={modal.deletaLivro}
          onClose={()=> handleAbrirModal('deletaLivro')}
        >
          <Box>
            <p>Quer mesmo excluir o  livro {itemLivro.titulo}?</p>
            <p>do banco de dados?</p>
            <Button onClick={()=> deletaLivro(itemLivro.idLivro)} color="error" variant="contained">Deletar</Button>
            <Button onClick={()=> handleAbrirModal('deletaLivro')} color="primary" variant="contained">Voltar</Button>
          </Box>
        </Modal>
        <Modal
          open={modal.editarLivro}
          onClose={()=> handleAbrirModal('editarLivro')}
        >
        </Modal> */}
    </div>
  );
};

export default DashboardLivros;
