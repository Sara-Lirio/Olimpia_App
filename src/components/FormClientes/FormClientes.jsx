import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCliente } from '../../service/api.jsx';
import { Form, Row, Column, DivInput, Button } from './FormStyle.js';
import Label from '../../components/Label/Label.jsx';
import Input from '../../components/Input/Input.jsx';

const FormClientes = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    telefone: '',
    cep: '',
  });

  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    createCliente(cliente);
    navigate('/clientes');
  };

  const handleChange = (target, key) => {
    const value = target.value;
    setCliente({ ...cliente, [key]: value });
  };

  return (
    <div>
      <Form>
        <Row>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput>
              <Label texto="Nome" />
              <Input
                type="text"
                value={cliente.nome}
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
                value={cliente.cpf}
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
                value={cliente.email}
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
                value={cliente.senha}
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
                value={cliente.telefone}
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
                value={cliente.cep}
                placeholder="Digite seu CEP.."
                onChange={({ target }) => handleChange(target, 'cep')}
              />
            </DivInput>
          </Column>
        </Row>
        <Button onClick={handleCreate} type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormClientes;
