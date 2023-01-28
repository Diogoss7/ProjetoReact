import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from '../pages/signUp/SignUp';
import SigninTeste from '../pages/signin/SignIn';
import PaginaUm from '../pages/paginaUm/PaginaUm';
import PaginaDois from '../pages/paginaDois/paginaDois';
import Home from '../pages/home/Home';


<Router>
  <Routes>
    <Route path='/' element={<PaginaUm />} />
    <Route path='/signin' element={<SigninTeste />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/home' element={<Home />} />
    <Route path='/paginaum' element={<PaginaUm />} />
    <Route path='/paginadois' element={<PaginaDois />} />
  </Routes>
</Router>