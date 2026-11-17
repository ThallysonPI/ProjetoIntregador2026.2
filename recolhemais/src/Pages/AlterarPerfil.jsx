import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
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
    <div className="alterar-perfil-page">
      <Link to="/perfil" className="btn-back"><span>←</span> Voltar</Link>

      <main className="profile-container">
        <header className="profile-header">
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
              <label htmlFor="fileInput" className="btn-change-avatar" title="Trocar foto de perfil">
                📷
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          {avatarError && <p role="alert">{avatarError}</p>}
          <h2>Meu Perfil</h2>
          <p className="subtitle">Mantenha seus dados pessoais e de localização atualizados</p>
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
      </main>
    </div>
  );
}
