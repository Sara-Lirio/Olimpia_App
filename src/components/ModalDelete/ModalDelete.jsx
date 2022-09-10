import { Button, Modal, Box } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import { BsFileX } from 'react-icons/bs';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  color: 'black',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: '24',
  p: 4,
  gap: 2,
  textAlign: 'center',
};

const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
  background-color: transparent;
  border: none;
`;

const ModalDelete = ({ open, handleClose, onClick, fecharModal }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        <h2 id="parent-modal-title">Cuidado!</h2>
        <p>Tem certeza que deseja excluir esse cliente?</p>
        <ButtonDiv>
          <Button variant="contained" color="primary" onClick={fecharModal}>
            Cancelar
          </Button>
          <Button variant="contained" color="warning" onClick={onClick}>
            Excluir
          </Button>
        </ButtonDiv>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
