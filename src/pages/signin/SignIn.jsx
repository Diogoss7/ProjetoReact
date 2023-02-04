import * as React from 'react';
import { Link } from 'react-router-dom'
import useStyles from './style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Signin() {
  const classes = useStyles;



  return (
    <div style={classes.containerMax}>
      <div style={classes.Login}>
        <div style={classes.title}>
          Login
        </div>
        <div style={classes.inputs}>
          <TextField label="email" variant="outlined" />
          <p></p>
          <TextField label="Senha" variant="outlined" />
        </div>
        <div style={classes.footerLogin}>
          <Link to='/home'>
            <Button variant="contained">Entrar</Button>
          </Link>
          <p></p>
          <Link to='/signup'>
            registre-se
          </Link>
        </div>

      </div>
    </div>

  )
}
