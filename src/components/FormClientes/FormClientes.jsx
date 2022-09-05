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
    confirmaSenha: '',
    telefone: '',
    cep: '',
  });

  return (
    <div>
      <Form>
        <Row>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput>
              <Label texto="Nome" />
              <Input type="text" placeholder="Digite seu nome.." />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput>
              <Label texto="CPF" />
              <Input type="text" placeholder="Digite seu CPF.." />
            </DivInput>
          </Column>
          <Column mobile="12" tablet="12" desktop="12">
            <DivInput>
              <Label texto="Email" />
              <Input type="text" placeholder="Digite seu email.." />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className="">
              <Label texto="Senha" />
              <Input type="password" placeholder="Digite sua senha.." />
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
              <Input type="text" placeholder="Digite seu telefone.." />
            </DivInput>
          </Column>
          <Column mobile="6" tablet="12" desktop="6">
            <DivInput className="">
              <Label texto="CEP" />
              <Input type="text" placeholder="Digite seu CEP.." />
            </DivInput>
          </Column>
        </Row>
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default FormClientes;
