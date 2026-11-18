import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/meusChamados.css';

export default function MeusChamados() {
  return (
    <div className="desktop-shell meus-chamados-page">
      <aside className="sidebar">
        <div className="brand">
          <img className="brand-logo" src="/imagens/imag.png" alt="" aria-hidden="true" />
          <div>
            <strong>RecolheMais</strong>
            <span>Gestão de chamados</span>
          </div>
        </div>

        <nav className="sidebar-menu" aria-label="Navegação principal">
          <Link to="/chamados" className="menu-item"><span>＋</span> Novo chamado</Link>
          <Link to="/meus-chamados" className="menu-item active" aria-current="page"><span>◷</span> Meus chamados</Link>
          <Link to="/mapa" className="menu-item"><span>⌖</span> Mapa</Link>
          <Link to="/calendario" className="menu-item"><span>▦</span> Calendário</Link>
          <Link to="/perfil" className="menu-item"><span>♙</span> Meu perfil</Link>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Meus Chamados</p>
            <h1>Olá João, bem-vindo aos seus chamados</h1>
          </div>
        </header>

        <section className="page">
          <div className="page-heading">
            <div>
              <h2>Meus Chamados</h2>
              <p>Acompanhe os problemas que você reportou.</p>
            </div>
          </div>

          <div className="layout-grid">
            <section className="card form-card">
              <div className="card-title">
                <div>
                  <h3>Confira as suas denúncias</h3>
                  <p>Verifique as denúncias abaixo.</p>
                </div>
              </div>
              <label htmlFor="ordenar">Ordenar chamados</label>
              <select id="ordenar" defaultValue="Recentes">
                <option value="Recentes">Recentes</option>
                <option value="Tipo de material">Tipo de material</option>
                <option value="Antigas">Antigas</option>
              </select>
              <div id="listaChamados" />
            </section>

            <aside className="side-column">
              <section className="card" id="detalhes">
                <h3>Detalhes do chamado</h3>
                <p>Selecione um chamado para ver os detalhes.</p>
                <p>Protocolo:</p>
                <strong id="detProtocolo">-</strong>
                <p>Tipo:</p>
                <strong id="detTipo">-</strong>
                <p>Local:</p>
                <strong id="detLocal">-</strong>
                <p>Status:</p>
                <strong id="detStatus">-</strong>
                <p>Descrição:</p>
                <strong id="detDescricao">-</strong>
                <img id="detFoto" src="" alt="Foto do chamado selecionado" />
              </section>

              <section className="card reports-card">
                <h3>Seus chamados</h3>
                <div className="report-numbers">
                  <div><strong id="numAnalise">3</strong><span>Em análise</span></div>
                  <div><strong id="numAndamento">4</strong><span>Em andamento</span></div>
                  <div><strong id="numConcluido">7</strong><span>Resolvidos</span></div>
                </div>
              </section>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
