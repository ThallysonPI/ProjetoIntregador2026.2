import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Form from './Pages/Form.jsx'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Form />} path="/cadastro" />
    
    </Routes>
    </BrowserRouter>
  )
}
export default Router