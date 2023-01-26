import './App.css'
import PaginaUm from './pages/paginaUm/paginaUm'
import PaginaDois from './pages/paginaDois/paginaDois'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
 
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/paginaUm' element={<PaginaUm />} />
          <Route path='/paginaDois' element={<PaginaDois />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
