import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EffectExample from '../../components/EffectExample';
import useStyles from './style';
export default function paginaUm() {
  const classes = useStyles;

  return (
    <div style={classes.containerMaxPageUm}>
      <h1>Pagina Um</h1>
      <EffectExample />
      <p></p>
      <Link to="/home">
        <button>
          Ir Para Home
        </button>
      </Link>
    </div>
  )
}
