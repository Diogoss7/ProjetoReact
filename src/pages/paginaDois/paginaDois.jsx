import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style';
export default function paginaDois() {
 
 const classes = useStyles;
  return (
    <div style={classes.containerMaxPageDois}>
      <h1>paginaDois</h1>
      <p></p>
      <Link to="/home">
        <button>
          Ir para Home
        </button>
      </Link>
    </div>

  )
}
