import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

<Router>
<Routes>
<Route path='/' element={<Home/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/paginaUm' element={<PaginaUm />} />
  <Route path='/paginaDois' element={<PaginaDois />} />
</Routes>
</Router>