import React from "react";
import { Box, Button, Modal } from "@mui/material";
import { display } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "30%",
  bgcolor: "#D9D9D9",
  border: "2px solid #d6d6d6",
  borderRadius: '16px',
  boxShadow: 24,
  p: 6,
  display: "flex",
  flexDirection: "column",
  aligItems: "center",
  justifyContent: "space-between",
};

const ModalDelLivros = ({ open, handleFechar, deletaLivro}) => {
  return (
   
      <Modal open={open} onClose={handleFechar}>

      <Box sx={style}>
        <p>Quer mesmo excluir o livro do banco de dados?</p>
        <div  style={{
           display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Button
          onClick={handleFechar}
          color="primary"
          variant="contained"
        >Cancelar
        </Button>
        <Button
          onClick={deletaLivro}
          color="error"
          variant="contained"
        >Deletar
        </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDelLivros;
