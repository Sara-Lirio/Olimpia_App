import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./FormLivros.module.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import Label from "../Label/Label";

const FormLivros = () => {
  const navigate = useNavigate();
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
    nPaginas: 0,
  });

  const handleChange = (key, value) => {
    setDadosForm({ ...dadosForm, [key]: value });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createLivros(dadosForm);
    navigate("/livros");
  };

  return (
    <div className={S.boxContainer}>
      <form className={S.formContainer}>
        <div id={S.capalivro}>
          <img src={dadosForm.imagem} height={150} />
        </div>

        <div id={S.imagem}>
          <Label texto="Imagem" />
          <Input
            type="text"
            value={dadosForm.imagem}
            placeholder="Cole a URL..."
            onChange={({ target }) => handleChange(target.value, "imagem")}
          />
        </div>

        <div id={S.titulo}>
          <Label texto="Titulo" />
          <Input
            type="text"
            value={dadosForm.titulo}
            placeholder="Insira o título..."
            onChange={({ target }) => handleChange(target.value, "titulo")}
          />
        </div>

        <div id={S.autor}>
          <Label texto="Autor" />
          <Input
            type="text"
            value={dadosForm.autor}
            placeholder="Digite o nome..."
            onChange={({ target }) => handleChange(target.value, "autor")}
          />
        </div>

        <div id={S.valor}>
          <Label texto="Preço: R$" />
          <Input
            type="number"
            value={dadosForm.valor}
            onChange={({ target }) => handleChange(target.value, "valor")}
          />
        </div>

        <div id={S.genero}>
          <Label texto="Genero" />
          <Input
            type="text"
            value={dadosForm.genero}
            placeholder="Digite o gênero..."
            onChange={({ target }) => handleChange(target.value, "genero")}
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
              value={dadosForm.genero}
              onChange={({ target }) => handleChange(target.value, "formato")}
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
            onChange={({ target }) => handleChange(target.value, "idioma")}
          />
        </div>

        <div id={S.estoque}>
          <Label texto="Qdt no Estoque" />
          <Input
            type="number"
            value={dadosForm.qtdEstoque}
            placeholder="Apenas números"
            onChange={({ target }) => handleChange(target.value, "qtdEstoque")}
          />
        </div>

        <div id={S.paginas}>
          <Label texto="nº Páginas" />
          <Input
            type="number"
            value={dadosForm.nPaginas}
            placeholder="Apenas números"
            onChange={({ target }) => handleChange(target.value, "nPaginas")}
          />
        </div>
      </form>
      <div className={S.btncontainer}>
        <Button variant="contained" onClick={handleCreate} type="submit">
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default FormLivros;
