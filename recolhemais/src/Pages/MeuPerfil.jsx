import { Link } from 'react-router-dom';
import '../styles/chamados.css';
import '../styles/perfil.css';

export default function MeuPerfil() {
  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <div className="desktop-shell perfil-page">
      <aside className="sidebar">
        <div className="brand">
          <img className="brand-logo" src="/imagens/imag.png" alt="" aria-hidden="true" />
          <div>
            <strong>RecolheMais</strong>
            <span>Gestão de chamados</span>
          </div>
        </div>

        <nav className="sidebar-menu" aria-label="Navegação principal">
          <Link to="/chamados" className="menu-item">
            <span>＋</span> Novo chamado
          </Link>
          <Link to="/meus-chamados" className="menu-item">
            <span>◷</span> Meus chamados
          </Link>
          <Link to="/mapa" className="menu-item">
            <span>⌖</span> Mapa
          </Link>
          <Link to="/calendario" className="menu-item">
            <span>▦</span> Calendário
          </Link>
          <Link to="/perfil" className="menu-item active" aria-current="page">
            <span>♙</span> Meu perfil
          </Link>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Meu perfil</p>
            <h1>Olá, João 👋</h1>
          </div>
        </header>

        <section className="page">
          <div className="page-heading">
            <div>
              <h2>Meu perfil</h2>
              <p>Gerencie suas informações pessoais e os dados da sua conta.</p>
            </div>
          </div>

          <div className="profile-layout">
            <div className="card profile-card">
              <div className="card-title">
                <h2>Informações pessoais</h2>
                <p>Atualize seus dados cadastrais.</p>
              </div>

              <div className="profile-header">
                <div className="avatar">J</div>
                <div className="profile-info">
                  <h3>João da Silva</h3>
                  <span>Morador</span>
                </div>
                <button type="button" className="btn-secondary">Alterar foto</button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome completo *</label>
                    <input type="text" id="nome" defaultValue="João da Silva" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input type="email" id="email" defaultValue="joao@email.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" defaultValue="(81) 99999-9999" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bairro">Bairro *</label>
                    <input type="text" id="bairro" defaultValue="Santo Amaro" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="endereco">Endereço</label>
                  <input type="text" id="endereco" defaultValue="Rua Exemplo, 123" />
                </div>

                <div className="form-group">
                  <label htmlFor="referencia">Ponto de referência</label>
                  <input type="text" id="referencia" placeholder="Digite um ponto de referência" />
                </div>

                <div className="form-actions">
                  <button type="reset" className="btn-cancel">Cancelar</button>
                  <button type="submit" className="btn-primary">Salvar alterações</button>
                </div>
              </form>
            </div>

            <div className="right-column">
              <div className="card security-card">
                <h2>Segurança</h2>
                <p>Mantenha sua conta protegida.</p>
                <Link to="/alterar-perfil" className="security-button">
                  🔒 Alterar informações do perfil
                </Link>
              </div>

              <div className="card help-card">
                <h2>Precisa de ajuda?</h2>
                <p>
                  Caso tenha algum problema com seus dados,
                  entre em contato com nossa equipe.
                </p>
                <button type="button" className="help-button">Falar com suporte</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
