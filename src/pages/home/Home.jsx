import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (

    <div>
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
