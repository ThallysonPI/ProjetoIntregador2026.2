import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/cadastro.css';
import { useNavigate } from 'react-router-dom';


export default function Cadastro() {
  const [tipoCadastro, setTipoCadastro] = useState('morador');
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate('/chamados');
  }

  return (
    <div className="cadastro-page">
      <main className="container-principal">
        <div className="recolhe-mais">
          <Link to="/login">
            <img src="/imagens/logo_melhorada.png" alt="Logo RecolheMais" />
          </Link>
        </div>

        <div className="botoes">
          <button
            type="button"
            className={`btn-morador${tipoCadastro === 'morador' ? ' ativo' : ''}`}
            aria-pressed={tipoCadastro === 'morador'}
            onClick={() => setTipoCadastro('morador')}
          >
            Morador
          </button>
          <button
            type="button"
            className={`btn-empresa${tipoCadastro === 'empresa' ? ' ativo' : ''}`}
            aria-pressed={tipoCadastro === 'empresa'}
            onClick={() => setTipoCadastro('empresa')}
          >
            Empresa
          </button>
        </div>

        <form id="formCadastro" method="post" className="formulario-cadastro" onSubmit={handleSubmit}>
          {tipoCadastro === 'morador' ? (
            <fieldset className="campos-morador">
              <legend hidden>Dados do morador</legend>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="contato">Telefone / WhatsApp</label>
              <input type="tel" name="contato" id="contato" />
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                maxLength={9}
                inputMode="numeric"
                pattern="\d{5}-?\d{3}"
                placeholder="00000-000"
                title="Digite no formato 00000-000"
                required
              />
              <label htmlFor="bairro">Bairro:</label>
              <input type="text" id="bairro" name="bairro" required />
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" name="senha" required />
            </fieldset>
          ) : (
            <fieldset className="campos-empresa">
              <legend hidden>Dados da empresa</legend>
              <label htmlFor="razao-social">Razão social:</label>
              <input type="text" id="razao-social" name="razaoSocial" required />
              <label htmlFor="cnpj">CNPJ:</label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                maxLength={18}
                inputMode="numeric"
                pattern="\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}"
                placeholder="00.000.000/0000-00"
                title="Digite no formato 00.000.000/0000-00"
                required
              />
              <label htmlFor="gestor">Nome do gestor:</label>
              <input type="text" id="gestor" name="gestor" required />
              <label htmlFor="telefone-corporativo">Telefone / WhatsApp corporativo:</label>
              <input type="tel" id="telefone-corporativo" name="telefoneCorporativo" required />
              <label htmlFor="email-empresa">E-mail corporativo:</label>
              <input type="email" id="email-empresa" name="emailEmpresa" required />
              <label htmlFor="sede">Endereço da sede:</label>
              <input type="text" id="sede" name="sede" required />
              <label htmlFor="areas-atendidas">Áreas atendidas:</label>
              <input type="text" id="areas-atendidas" name="areasAtendidas" required />
              <label htmlFor="senha-empresa">Senha:</label>
              <input type="password" id="senha-empresa" name="senhaEmpresa" required />
            </fieldset>
          )}
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  );
}
