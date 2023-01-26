import React from 'react'
import { Link } from 'react-router-dom'
export default function paginaDois() {
  return (
    <div>
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
