import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "../../";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Label from "../Label/Label";
import Input from "../../components/Input/Input.jsx";
import { getLivroUnico, putLivro } from "../../service/livroApi";

const AtualizaLivro = () => {
  const params = useParams();
  const navigate = useNavigate();
  const idLivro = params.idLivro;

  const [dadosForm, setDadosForm] = useState({
    imagem: "",
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

  async function salvarLivro() {
    await putLivro(idLivro, dadosForm);
    navigate("/livros");
  }

  async function request() {
    const response = await getLivroUnico(idLivro);
    setDadosForm(response);
  }

  useEffect(() => {
    request();
  }, [idLivro]);

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
            defaultValue={dadosForm.imagem}
            placeholder="Cole a URL..."
            onChange={({ target }) => handleChange(target)}
          />
        </div>

        <div id={S.titulo}>
          <Label texto="Titulo" />
          <Input
            type="text"
            defaultValue={dadosForm.titulo}
            placeholder="Insira o título..."
            onChange={({ target }) => handleChange(target)}
          />
        </div>

        <div id={S.autor}>
          <Label texto="Autor" />
          <Input
            type="text"
            defaultValue={dadosForm.autor}
            placeholder="Digite o nome..."
            onChange={({ target }) => handleChange(target)}
          />
        </div>

        <div id={S.valor}>
          <Label texto="Preço: R$" />
          <Input
            type="number"
            defaultValue={dadosForm.valor}
            onChange={({ target }) => handleChange(target)}
          />
        </div>

        <div id={S.genero}>
          <Label texto="Genero" />
          <Input
            type="text"
            defaultValue={dadosForm.genero}
            placeholder="Digite o gênero..."
            onChange={({ target }) => handleChange(target)}
          />
        </div>

        <div id={S.formato}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Formato
            </FormLabel>
            <RadioGroup
              id={S.radio}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              defoultValue={dadosForm.genero}
              onChange={({ target }) => handleChange(target)}
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
            defaultValue={dadosForm.idioma}
            placeholder="Digite o idioma..."
            onChange={({ target }) => handleChange(target)}
          />
        </div>

        <div id={S.estoque}>
          <Label texto="Qdt no Estoque" />
          <Input
            type="number"
            defaultValue={dadosForm.qtdEstoque}
            placeholder="Apenas números"
            onChange={({ target }) => handleChange(target)}
          />
        </div>

        <div id={S.paginas}>
          <Label texto="nº Páginas" />
          <Input
            type="number"
            defaultValue={dadosForm.nPaginas}
            placeholder="Apenas números"
            onChange={({ target }) => handleChange(target)}
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

export default AtualizaLivro;
