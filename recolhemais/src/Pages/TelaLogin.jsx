import { Link } from 'react-router-dom';
import '../styles/login.css';

export default function TelaLogin() {
  return (
    <div className="login-page">
      <main className="login-container">
        <h2>Entrar</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" required />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Lembrar de mim
            </label>
            <Link to="/alterar-senha">Esqueceu a senha?</Link>
          </div>

          <button type="submit" className="btn-login">Acessar</button>
        </form>
        <p className="signup-text">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </main>
    </div>
  );
}
