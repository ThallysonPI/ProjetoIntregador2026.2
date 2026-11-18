import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/chamados.css';
import '../styles/alterarPerfil.css';

export default function AlterarPerfil() {
  const [avatarPreview, setAvatarPreview] = useState('');
  const [avatarError, setAvatarError] = useState('');

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      event.target.value = '';
      setAvatarError('Selecione um arquivo de imagem válido.');
      return;
    }

    setAvatarError('');
    setAvatarPreview(URL.createObjectURL(file));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="desktop-shell alterar-perfil-page">
      <aside className="sidebar">
        <div className="brand">
          <img className="brand-logo" src="/imagens/imag.png" alt="" aria-hidden="true" />
          <div>
            <strong>RecolheMais</strong>
            <span>Gestão de chamados</span>
          </div>
        </div>

        <nav className="sidebar-menu" aria-label="Navegação principal">
          <Link to="/" className="menu-item"><span>⌂</span> Início</Link>
          <Link to="/chamados" className="menu-item"><span>＋</span> Novo chamado</Link>
          <Link to="/meus-chamados" className="menu-item"><span>◷</span> Meus chamados</Link>
          <Link to="/mapa" className="menu-item"><span>⌖</span> Mapa</Link>
          <Link to="/calendario" className="menu-item">
            <img className="menu-icon-image" src="/imagens/icons8-calendário-32.png" alt="" aria-hidden="true" />
            Calendário
          </Link>
          <Link to="/perfil" className="menu-item active" aria-current="page"><span>♙</span> Meu perfil</Link>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Meu perfil</p>
            <h1>Alterar informações do perfil</h1>
          </div>
          <Link to="/perfil" className="btn-back">← Voltar</Link>
        </header>

        <section className="page alterar-perfil-content">
          <section className="profile-container">
            <header className="edit-profile-header">
              <div className="avatar-container">
                <div className="avatar-wrapper">
                  <div
                    className="avatar-placeholder"
                    id="avatarPreview"
                    style={avatarPreview ? {
                      backgroundImage: `url("${avatarPreview}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    } : undefined}
                  >
                    {avatarPreview ? '' : '👤'}
                  </div>
                  <label
                    htmlFor="avatar-file"
                    className="btn-change-avatar"
                    title="Trocar foto de perfil"
                  >
                    📷
                  </label>
                  <input
                    type="file"
                    id="avatar-file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              {avatarError && <p role="alert">{avatarError}</p>}
              <h2>Meu Perfil</h2>
              <p className="subtitle">
                Mantenha seus dados pessoais e de localização atualizados
              </p>
            </header>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group full-width">
                  <label htmlFor="name">Nome completo</label>
                  <input type="text" id="name" defaultValue="Nome do Usuário" />
                </div>
                <div className="input-group">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" placeholder="000.000.000-00" />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" defaultValue="(11) 99999-9999" />
                </div>
                <div className="input-group full-width">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" defaultValue="usuario@email.com" />
                </div>
                <div className="input-group">
                  <label htmlFor="cep">CEP</label>
                  <input type="text" id="cep" placeholder="00000-000" />
                </div>
                <div className="input-group">
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" id="cidade" placeholder="Ex: São Paulo" />
                </div>
                <div className="input-group">
                  <label htmlFor="bairro">Bairro</label>
                  <input type="text" id="bairro" placeholder="Ex: Centro" />
                </div>
                <div className="input-group">
                  <label htmlFor="estado">Estado</label>
                  <input type="text" id="estado" placeholder="Ex: SP" />
                </div>
                <div className="input-group full-width">
                  <label htmlFor="referencia">Ponto de referência</label>
                  <input
                    type="text"
                    id="referencia"
                    placeholder="Ex: Próximo ao mercado, em frente à praça..."
                  />
                </div>
              </div>

              <div className="button-group">
                <button type="submit" className="btn-save">Salvar alterações</button>
              </div>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
}
