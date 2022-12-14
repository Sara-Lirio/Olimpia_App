import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import style from './Home.module.css';
import imageCard from '../../assets/imageCard.gif';
import { Link } from 'react-router-dom';
import CardBooks from '../../components/CardBooks/CardBooks';
import { getLivros } from '../../service/livroApi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Load from '../../components/Load/Load';

const Home = () => {
  const [livros, setLivros] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const carousel = useRef(null);

  async function requisicao() {
    const response = await getLivros();
    setLivros(response);
  }

  useEffect(() => {
    setTimeout(() => {
      requisicao();
      setRemoveLoading(true);
    }, 1000);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <Header />
      <main>
        <section className={style.card}>
          <div className={style.text}>
            <h3 className={style.subtitle}>Organização e praticidade</h3>
            <h1 className={style.title}>Livraria Olimpia</h1>
            <p className={style.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptate a dolorem veritatis veniam. Illum facere aspernatur
              doloremque animi praesentium veniam nihil ea quidem repellat!
              Molestiae reiciendis sequi exercitationem tempore.
            </p>
            <div className={style.cadastros}>
              <Link to="/cadastroCliente" className={style.btnCliente}>
                Cadastrar Cliente
              </Link>
              <Link to="/cadastroLivro" className={style.btnLivro}>
                Cadastrar Livro
              </Link>
            </div>
          </div>
          <img src={imageCard} className={style.imgcard} />
        </section>

        <section className={style.container}>
          <h3 className={style.h3}>ADICIONADOS RECENTEMENTE</h3>
          <div className={style.books} ref={carousel}>
            {!!livros &&
              livros.map((livro) => {
                return (
                  <>
                    <CardBooks
                      imagem={livro.imagem}
                      idLivro={livro.idLivro}
                      titulo={livro.titulo}
                      autor={livro.autor}
                      qtdEstoque={livro.qtdEstoque}
                      className={style.item}
                    />
                    <div className={style.buttons}>
                      <button
                        className={style.btnleft}
                        onClick={handleLeftClick}
                      >
                        <FaAngleLeft className={style.left} />
                      </button>

                      <button
                        className={style.btnright}
                        onClick={handleRightClick}
                      >
                        <FaAngleRight className={style.right} />
                      </button>
                    </div>
                  </>
                );
              })}
            {!removeLoading && <Load />}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
