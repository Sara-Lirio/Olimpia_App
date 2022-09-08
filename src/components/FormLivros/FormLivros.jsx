import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Form, Row, Column, DivInput, Button } from './FormStyle.js'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
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
    <div>
      <Form>
        <Row>
            <DivInput>
              <Label texto="Titulo" />
              <Input
                type="text"
                value={dadosForm.titulo}
                placeholder="Insira o título..."
                onChange={({ target }) => handleChange(target.value, "titulo")}
              />
            </DivInput>

            <DivInput>
              <Label texto="Imagem" />
              <Input
                type="text"
                value={dadosForm.imagem}
                placeholder="Cole a URL..."
                onChange={({ target }) => handleChange(target.value, "imagem")}
              />
            </DivInput>

            <DivInput>
              <Label texto="Autor" />
              <Input
                type="text"
                value={dadosForm.autor}
                placeholder="Digite o nome..."
                onChange={({ target }) => handleChange(target.value, "autor")}
              />
            </DivInput>

            <DivInput>
              <Label texto="Genero" />
              <Input
                type="text"
                value={dadosForm.genero}
                placeholder="Digite o gênero..."
                onChange={({ target }) => handleChange(target.value, "genero")}
              />
            </DivInput>

            <DivInput>
              <Label texto="Formato" />
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Formato
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={dadosForm.genero}
                  onChange={({ target }) =>
                    handleChange(target.value, "formato")
                  }
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
            </DivInput>

            <DivInput>
              <Label texto="Idioma" />
              <Input
                type="text"
                value={dadosForm.idioma}
                placeholder="Digite o idioma..."
                onChange={({ target }) => handleChange(target.value, "idioma")}
              />
            </DivInput>

            <DivInput>
              <Label texto="Qdt no Estoque" />
              <Input
                type="text"
                value={dadosForm.qtdEstoque}
                placeholder="Apenas números"
                onChange={({ target }) =>
                  handleChange(target.value, "qtdEstoque")
                }
              />
            </DivInput>

            <DivInput>
              <Label texto="Número de Páginas" />
              <Input
                type="text"
                value={dadosForm.nPaginas}
                placeholder="Apenas números"
                onChange={({ target }) =>
                  handleChange(target.value, "nPaginas")
                }
              />
            </DivInput>
        </Row>
        <div>
          <Button onClick={handleCreate} type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormLivros;
