import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import TelaLogin from './Pages/TelaLogin.jsx';
import Cadastro from'./Pages/Cadastro.jsx';
import Chamados from'./Pages/Chamados.jsx';
import AlterarPerfil from './Pages/AlterarPerfil.jsx';
import AlterarSenha from './Pages/AlterarSenha.jsx';
import DenunciaEnviada from'./Pages/DenunciaEnviada.jsx';
import Mapa from './Pages/Mapa.jsx';
import MeuPerfil from './Pages/MeuPerfil.jsx';
import MeusChamados from './Pages/MeusChamados.jsx';
import Form from './Pages/Form.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/denunciar" element={<Form />} />
        <Route path="/denuncia-enviada" element={<DenunciaEnviada />} />
        <Route path="/chamados" element={<Chamados />} />
        <Route path="/meus-chamados" element={<MeusChamados />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/perfil" element={<MeuPerfil />} />
        <Route path="/alterar-perfil" element={<AlterarPerfil />} />
        <Route path="/alterar-senha" element={<AlterarSenha />} />
      </Routes>
    </BrowserRouter>
  );
}