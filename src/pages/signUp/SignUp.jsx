import * as React from 'react';
import { Link } from 'react-router-dom'
import useStyles from './style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUp() {
  const classes = useStyles;

  return (

    <div style={classes.containerMax}>
      <div style={classes.Login}>
        <div style={classes.title}>
         Cadastre-se
        </div>
        <div style={classes.inputs}>
          <TextField label="Nome" variant="outlined" />
          <br />
          <TextField label="Email" variant="outlined" />
          <br />
          <TextField label="Senha" variant="outlined" />
          <br />
          <TextField label="Telefone" variant="outlined" />
       
        </div>
        <div style={classes.footerLogin}>
          <Button variant="contained">Salvar</Button>
          <br />
          <Link to='/signin'>
            Fazer Login
          </Link>
        </div>
      </div>
    </div>
  )
}
