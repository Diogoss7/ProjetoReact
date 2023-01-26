import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EffectExample from '../../components/EffectExample';
export default function paginaUm() {

  return (
    <div>
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
