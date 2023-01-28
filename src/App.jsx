import './App.css'
import PaginaUm from './pages/paginaUm/paginaUm'
import PaginaDois from './pages/paginaDois/paginaDois'
import Home from './pages/home/Home'
import SignUp from './pages/signUp/SignUp'
import Signin from './pages/signIn/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
 
      <Router>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/paginaum' element={<PaginaUm />} />
          <Route path='/paginadois' element={<PaginaDois />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
