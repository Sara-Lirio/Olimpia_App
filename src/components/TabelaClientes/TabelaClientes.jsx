import React, { useState } from 'react';
import { deleteCliente } from '../../service/api';
import { Cell, Row } from '../../styles/global.js';
import ModalDelete from '../../components/ModalDelete/ModalDelete.jsx';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { BsPencilSquare } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

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
  const navigate = useNavigate();
  const [openDelete, setOpenDelete] = useState(false);

  function abrirModal() {
    setOpenDelete(true);
  }

  function fecharModal() {
    setOpenDelete(false);
  }

  async function deletaCliente() {
    await deleteCliente(id);
    fecharModal();
    handleAtualizaTela();
  }
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

            <Cell
              onClick={() => navigate(`/atualizaCliente/${id}`)}
              align="left"
            >
              <BsPencilSquare size={25} />
            </Cell>

            <Cell onClick={abrirModal} align="left">
              <MdDelete size={25} />
            </Cell>
          </Row>
        </TableBody>
      </Table>
      <ModalDelete
        open={openDelete}
        handleClose={fecharModal}
        onClick={deletaCliente}
        fecharModal={fecharModal}
      />
    </div>
  );
};

export default TabelaClientes;
