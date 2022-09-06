import React, { useState } from 'react'
import styles from './HeaderLogin.module.css'
import { MdMenuBook } from "react-icons/md";
import Logo from '../../assets/logo.png';
import { Box, Modal, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import book from '../../assets/Book.gif'
import { VscClose } from "react-icons/vsc"

const HeaderLogin = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        border: 'none',
        borderRadius: 8,
        boxShadow: 25,
        p: 5,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <header className={styles.header}>
            <nav className={styles.navLogin}>
                <img className={styles.logoOlimpia} src={Logo} alt='logo' />
                
                <div className={styles.diagonal}></div>
                <button className={styles.btnLogin} onClick={handleOpen}>LOGIN
                    <div>
                        <MdMenuBook size={30} />
                    </div>
                </button>

                <Modal
                    open={open}
                    onClose={handleClose}>
                    <Box sx={style} className={styles.box}>

                        <img src={book} className={styles.imageBook} />
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '26ch', heigth: '0ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            className={styles.formBox}>

                            <TextField id="standard-basic" label="Usuário" variant="standard" />
                            <TextField id="standard-basic" type='password' label="Senha" variant="standard" /><br /><br /><br />


                            <div >
                                <Link to='/home' className={styles.btnEntrar} >Entrar</Link>
                            </div>
                        </Box>

                        <VscClose size={35} onClick={handleClose} className={styles.btnFechar} />



                    </Box>
                </Modal>

            </nav>
        </header >
    )
}

export default HeaderLogin