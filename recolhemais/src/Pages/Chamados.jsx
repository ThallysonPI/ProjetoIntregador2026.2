import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import '../styles/chamados.css';

export default function Chamados() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/denuncia-enviada');
  }

  return (
    <div className="desktop-shell chamados-page">
      <aside className="sidebar">
        <div className="brand">
          <img className="brand-logo" src="/imagens/imag.png" alt="" aria-hidden="true" />
          <div>
            <strong>RecolheMais</strong>
            <span>Gestão de chamados</span>
          </div>
        </div>
        <nav className="sidebar-menu" aria-label="Navegação principal">
          <Link to="/chamados" className="menu-item active" aria-current="page"><span>＋</span> Novo chamado</Link>
          <Link to="/meus-chamados" className="menu-item"><span>◷</span> Meus chamados</Link>
          <Link to="/mapa" className="menu-item"><span>⌖</span> Mapa</Link>
          <Link to="/calendario" className="menu-item"><span>▦</span> Calendário</Link>
          <Link to="/perfil" className="menu-item"><span>♙</span> Meu perfil</Link>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Novo chamado</p>
            <h1>Olá João, conte o que aconteceu</h1>
          </div>
        </header>

        <section className="page">
          <div className="page-heading">
            <div>
              <h2>Registrar denúncia</h2>
              <p>Preencha os dados do problema para que possamos encaminhá-lo.</p>
            </div>
          </div>

          <div className="layout-grid">
            <section className="card">
              <div className="card-title">
                <div className="title-icon" aria-hidden="true">＋</div>
                <div>
                  <h3>Informações do chamado</h3>
                  <p>Os campos marcados com * são obrigatórios.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="tipo-material">Tipo de material *</label>
                    <select id="tipo-material" name="tipoMaterial" required defaultValue="">
                      <option value="" disabled>Selecione uma opção</option>
                      <option value="reciclavel">Material reciclável</option>
                      <option value="organico">Material orgânico</option>
                      <option value="entulho">Entulho</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="data">Data em que identificou *</label>
                    <input type="date" id="data" name="data" required />
                  </div>

                  <div className="field field-full">
                    <label htmlFor="local">Localização *</label>
                    <div className="location-input">
                      <span aria-hidden="true">⌖</span>
                      <input type="text" id="local" name="local" placeholder="Rua, número, bairro" required />
                    </div>
                  </div>

                  <div className="field field-full">
                    <label htmlFor="descricao">Descrição *</label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      placeholder="Descreva o problema e indique um ponto de referência."
                      required
                    />
                  </div>

                  <div className="field field-full">
                    <label htmlFor="foto">Foto <small>(opcional)</small></label>
                    <label className="upload" htmlFor="foto">
                      <span className="upload-icon" aria-hidden="true">＋</span>
                      <span>
                        <strong>Adicionar uma foto</strong>
                        <small>Selecione uma imagem do seu dispositivo</small>
                      </span>
                      <span className="upload-action">Escolher arquivo</span>
                    </label>
                    <input className="hidden-file" type="file" id="foto" name="foto" accept="image/*" />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="reset" className="cancel">Limpar</button>
                  <button type="submit" className="submit">Enviar denúncia</button>
                </div>
              </form>
            </section>

            <aside className="side-column">
              <section className="card help-card">
                <h3>Como funciona?</h3>
                <p>Após o envio, sua denúncia será analisada pela equipe responsável.</p>
              </section>
              <section className="card">
                <h3>Dica</h3>
                <p>Inclua um endereço detalhado e uma foto para facilitar a localização do problema.</p>
              </section>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
