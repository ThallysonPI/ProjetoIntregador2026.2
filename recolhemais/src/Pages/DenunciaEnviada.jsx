import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/denunciaEnviada.css';

export default function DenunciaEnviada() {
  return (
    <div className="denuncia-page">
      <main className="container">
        <div className="icone-sucesso">✓</div>
        <h1>Denúncia enviada!</h1>
        <p className="mensagem">
          Sua denúncia foi registrada com sucesso.
          Obrigado por ajudar a manter nossa cidade mais limpa!
        </p>
        <div className="status">
          <p><strong>Status:</strong> Denúncia recebida</p>
          <p>Acompanhe as próximas atualizações pelo sistema.</p>
        </div>
        <Link to="/chamados" className="botao">
          Voltar para o início
        </Link>
      </main>
    </div>
  );
}
