import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../signUp/SignUp'
import SignIn from '../signIn/SignIn'

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
      <p></p>
      <Link to="/signin">
        <p></p>
        <button>
          sign in
        </button>
      </Link>
      <Link to="/signup">
        <p></p>
        <button>
          sign Up
        </button>
      </Link>
    </div>
  )
}
