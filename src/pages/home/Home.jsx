import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';
import useStyles from './style'

export default function Home() {
  const classes = useStyles;
  return (

    <div style={classes.containerMax}>
      <h1>Home</h1>
      <Link to="/paginaUm">
        <button>
          ir Pagina Um
        </button>
      </Link>
      <Link to="/paginaDois">
        <p></p>
        <button>
          ir Pagina Dois
        </button>
      </Link>
       </div>
  )
}
