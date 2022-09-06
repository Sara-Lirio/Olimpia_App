import React, { useState } from 'react';
import { Cell, Row, Div } from '../../styles/global.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

const TabelaClientes = ({
  id,
  nome,
  email,
  cpf,
  senha,
  telefone,
  cep,
  handleAtualizaTela,
}) => {
  return (
    <div>
      <Table>
        <TableBody>
          <Row key={id}>
            <Cell align="left">{id}</Cell>
            <Cell align="left">{nome}</Cell>
            <Cell align="left">{email}</Cell>
            <Cell align="left">{cpf}</Cell>
            <Cell align="left">{senha}</Cell>
            <Cell align="left">{telefone}</Cell>
            <Cell align="left">{cep}</Cell>

            <Cell align="left">
              <button>Atualizar</button>
            </Cell>

            <Cell align="left">
              <button>Deletar</button>
            </Cell>
          </Row>
        </TableBody>
      </Table>
    </div>
  );
};

export default TabelaClientes;
