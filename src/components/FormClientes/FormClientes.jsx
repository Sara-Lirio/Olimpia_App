import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import {
  createCliente,
  getClienteUnico,
  updateCliente,
} from '../../service/api.js';
import { Form, Row, Column, DivInput, Button } from './FormStyle.js';
import Label from '../../components/Label/Label.jsx';
import Input from '../../components/Input/Input.jsx';

const FormClientes = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const [dadosForm, setDadosForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    telefone: '',
    cep: '',
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setDadosForm({ ...dadosForm, [key]: value });
  };

  async function salvarCliente(e) {
    e.preventDefault();
    if (id) {
      await updateCliente(id, dadosForm);
    } else {
      await createCliente(dadosForm);
    }
    navigate('/clientes');
  }

  async function request() {
    const response = await getClienteUnico(id);
    console.log(response);
    setDadosForm({
      nome: response.cliente.nome,
      cpf: response.cliente.cpf,
      email: response.cliente.email,
      senha: response.cliente.senha,
      telefone: response.cliente.telefone,
      cep: response.cliente.cep,
    });
    console.log(dadosForm);
  }

  return (
    <div>
      <Form>
        <Row>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput>
              <Label texto="Nome" />
              <Input
                type="text"
                value={dadosForm.nome}
                placeholder="Digite seu nome.."
                onChange={({ target }) => handleChange(target, 'nome')}
              />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput>
              <Label texto="CPF" />
              <Input
                type="text"
                value={dadosForm.cpf}
                placeholder="Digite seu CPF.."
                onChange={({ target }) => handleChange(target, 'cpf')}
              />
            </DivInput>
          </Column>
          <Column mobile="12" tablet="12" desktop="12">
            <DivInput>
              <Label texto="Email" />
              <Input
                type="text"
                value={dadosForm.email}
                placeholder="Digite seu email.."
                onChange={({ target }) => handleChange(target, 'email')}
              />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className="">
              <Label texto="Senha" />
              <Input
                type="password"
                value={dadosForm.senha}
                placeholder="Digite sua senha.."
                onChange={({ target }) => handleChange(target, 'senha')}
              />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className="">
              <Label texto="Confirme sua senha" />
              <Input type="password" placeholder="Digite sua senha.." />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className="">
              <Label texto="Telefone" />
              <Input
                type="text"
                value={dadosForm.telefone}
                placeholder="Digite seu telefone.."
                onChange={({ target }) => handleChange(target, 'telefone')}
              />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className="">
              <Label texto="CEP" />
              <Input
                type="text"
                value={dadosForm.cep}
                placeholder="Digite seu CEP.."
                onChange={({ target }) => handleChange(target, 'cep')}
              />
            </DivInput>
          </Column>
        </Row>
        <div>
          <Button onClick={salvarCliente} type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormClientes;
