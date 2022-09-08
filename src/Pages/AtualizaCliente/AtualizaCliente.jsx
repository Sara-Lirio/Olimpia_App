import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCliente, getClienteUnico } from '../../service/api.js';
import {
  Form,
  Row,
  Column,
  DivInput,
  Button,
} from '../../components/FormClientes/FormStyle.js';
import Label from '../../components/Label/Label.jsx';
import Input from '../../components/Input/Input.jsx';

const AtualizaCliente = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [dadosForm, setDadosForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    telefone: '',
    cep: '',
  });
  const handleChange = (key, value) => {
    setDadosForm({ ...dadosForm, [key]: value });
  };
  const id = params.id;

  async function salvarCliente() {
    await updateCliente(id, dadosForm);
    navigate('/clientes');
  }

  async function request() {
    const response = await getClienteUnico(id);
    setDadosForm(response);
  }

  useEffect(() => {
    request();
  }, [id]);

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
                onChange={({ target }) => handleChange(target)}
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
                onChange={({ target }) => handleChange(target)}
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
                onChange={({ target }) => handleChange(target)}
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
                onChange={({ target }) => handleChange(target)}
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
                onChange={({ target }) => handleChange(target)}
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
                onChange={({ target }) => handleChange(target)}
              />
            </DivInput>
          </Column>
        </Row>
        <div>
          <Button onClick={salvarCliente} type="submit">
            atualizar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AtualizaCliente;
