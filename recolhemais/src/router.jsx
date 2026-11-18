import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AlterarPerfil from './Pages/AlterarPerfil.jsx';
import AlterarSenha from './Pages/AlterarSenha.jsx';
import Cadastro from './Pages/Cadastro.jsx';
import Calendario from './Pages/Calendario.jsx';
import Chamados from './Pages/Chamados.jsx';
import DenunciaEnviada from './Pages/DenunciaEnviada.jsx';
import Home from './Pages/Home.jsx';
import Mapa from './Pages/Mapa.jsx';
import MeuPerfil from './Pages/MeuPerfil.jsx';
import MeusChamados from './Pages/MeusChamados.jsx';
import TelaLogin from './Pages/TelaLogin.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/denuncia-enviada" element={<DenunciaEnviada />} />
        <Route path="/chamados" element={<Chamados />} />
        <Route path="/meus-chamados" element={<MeusChamados />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/perfil" element={<MeuPerfil />} />
        <Route path="/alterar-perfil" element={<AlterarPerfil />} />
        <Route path="/alterar-senha" element={<AlterarSenha />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
