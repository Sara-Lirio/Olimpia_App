import React from "react";
import { Box, Button, Modal } from "@mui/material";
import { deletaLivro } from "../../service/livroApi";

const style = {
  position: "absolute",
  color: "black",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "25%",
  bgcolor: "background.paper",
  borderRadius: '16px',
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  aligItems: "center",
  justifyContent: "space-between",
  p: 4,
};

const ModalDelLivros = ({ open, handleClose, onClick, fecharModal }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        <h4>Quer mesmo excluir este livro do banco de dados?</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={fecharModal} color="primary" variant="contained">
            Cancelar
          </Button>
          <Button onClick={onClick} color="error" variant="contained">
            Deletar
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDelLivros;
