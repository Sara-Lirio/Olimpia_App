import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./FormLivros.module.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Label from "../Label/Label";
import Input from '../../components/Input/Input.jsx';
import { postLivro, putLivro, getLivroUnico } from "../../service/livroApi";

const FormLivros = () => {
  const params = useParams();
  const navigate = useNavigate();
  const idLivro = params.idLivro;

  const [dadosForm, setDadosForm] = useState({
    imagem: "",
    idLivro: 0,
    titulo: "",
    autor: "",
    genero: "",
    formato: "",
    valor: 0,
    idioma: "",
    qtdEstoque: 0,
    numeroPaginas: 0,
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setDadosForm({ ...dadosForm, [key]: value });
  };

  async function salvarLivro(e){
    e.preventDefault();
    if (idLivro){
      await putLivro(idLivro, dadosForm);
    } else {
      await postLivro(dadosForm)
    }
    navigate('/livros')
  }

  async function request(){
    const response = await getLivroUnico(idLivro);

    setDadosForm({
    imagem: response.titulo.imagem,
    idLivro: response.titulo.idLivro,
    titulo: response.titulo.titulo,
    autor: response.titulo.autor,
    genero: response.titulo.genero,
    formato: response.titulo.formato,
    valor: response.titulo.valor,
    idioma: response.titulo.idioma,
    qtdEstoque: response.titulo.qtdEstoque,
    numeroPaginas: response.titulo.numeroPaginas,
    })
    console.log(response)
  }

  useEffect(() => {
    if (idLivro){
      request()
    }
  }, []);


  return (
    <div className={S.boxContainer}>
      <form className={S.formContainer}>
        <div id={S.capalivro}>
          <img src={dadosForm.imagem} height={150} />
        </div>

        <div id={S.imagem}>
          <Label texto="Imagem" />
          <Input
            type="url"
            value={dadosForm.imagem}
            placeholder="Cole a URL..."
            onChange={({ target }) => handleChange(target, "imagem")}
          />
        </div>

        <div id={S.titulo}>
          <Label texto="Titulo" />
          <Input
            type="text"
          value={dadosForm.titulo}
            placeholder="Insira o título..."
            onChange={({ target }) => handleChange(target, "titulo")}
          />
        </div>

        <div id={S.autor}>
          <Label texto="Autor" />
          <Input
            type="text"
            value={dadosForm.autor}
            placeholder="Digite o nome..."
            onChange={({ target }) => handleChange(target, "autor")}
          />
        </div>

        <div id={S.valor}>
          <Label texto="Preço: R$" />
          <Input
            type="number"
            value={dadosForm.valor}
            onChange={({ target }) => handleChange(target, "valor")}
          />
        </div>

        <div id={S.genero}>
          <Label texto="Genero" />
          <Input
            type="text"
            value={dadosForm.genero}
            placeholder="Digite o gênero..."
            onChange={({ target }) => handleChange(target, "genero")}
          />
        </div>

        <div id={S.formato}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Formato
            </FormLabel>
            <RadioGroup id={S.radio}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
             defaultValue={dadosForm.genero}
              onChange={({ target }) => handleChange(target, "formato")}
            >
              <FormControlLabel
                value="físico"
                control={<Radio />}
                label="Físico"
              />
              <FormControlLabel
                value="online"
                control={<Radio />}
                label="Online"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div id={S.idioma}>
          <Label texto="Idioma" />
          <Input
            type="text"
            value={dadosForm.idioma}
            placeholder="Digite o idioma..."
            onChange={({ target }) => handleChange(target, "idioma")}
          />
        </div>

        <div id={S.estoque}>
          <Label texto="Qdt no Estoque" />
          <Input
            type="number"
            value={dadosForm.qtdEstoque}
            placeholder="Apenas números"
            onChange={({ target }) => handleChange(target, "qtdEstoque")}
          />
        </div>

        <div id={S.paginas}>
          <Label texto="nº Páginas" />
          <Input
            type="number"
            value={dadosForm.numeroPaginas}
            placeholder="Apenas números"
            onChange={({ target }) => handleChange(target, "numeroPaginas")}
          />
        </div>
      </form>
      <div className={S.btncontainer}>
        <Button variant="contained" onClick={salvarLivro} type="submit">
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default FormLivros;
