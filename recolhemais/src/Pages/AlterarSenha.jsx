import { Link } from 'react-router-dom';
import '../styles/alterarSenha.css';

export default function AlterarSenha() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="alterar-senha-page">
      <main className="login-container">
        <h2>Alterar senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nova-senha">Nova senha</label>
            <input type="password" id="nova-senha" placeholder="Digite a nova senha" required />
          </div>

          <div className="input-group">
            <label htmlFor="confirmar-senha">Confirmar nova senha</label>
            <input type="password" id="confirmar-senha" placeholder="Confirmar sua nova senha" required />
          </div>

          <button type="submit">Alterar senha</button>
        </form>
        <Link to="/login">Voltar para o login</Link>
      </main>
    </div>
  );
}
