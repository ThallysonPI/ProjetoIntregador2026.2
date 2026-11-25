import { Link } from 'react-router-dom';
import '../styles/home.css';

const publicImagesPath = `${import.meta.env.BASE_URL}imagens/`;

export default function Home() {
  return (
    <main className="home-page">
      <header id="header">
        <div className="interface">
          <section className="logo-UECI">
            <img src="/imagens/imag.png" alt="RecolheMais" />
          </section>

          <section className="menu-desktop">
            <nav aria-label="Navegação principal">
              <ul>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#novidades">Novidades</a></li>
                <li>
                  <a
                    href="https://sites.google.com/view/ueci-startup/in%C3%ADcio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sobre nós
                  </a>
                </li>
                <li><a href="#cronograma">Cronograma</a></li>
              </ul>
            </nav>
          </section>

          <section className="btn-contato">
            <a href="#contato"><button type="button">Fale Conosco</button></a>
          </section>
        </div>
      </header>

      <section className="hero-site">
        <div className="interface">
          <div className="txt-hero">
            <h1>Deixe o seu futuro <span>mais puro</span></h1>
            <p>
              Ajude a construir um futuro mais sustentável para todos.
              Utilizando o sistema de coleta seletiva, você ajuda na
              preservação do meio ambiente e reduz o impacto ambiental
              <span> causado pelo descarte irregular do lixo. </span>
            </p>
            <Link to="/login"><button type="button">Comece por aqui!</button></Link>
          </div>
        </div>
      </section>

      <section className="vantagens" id="projetos">
        <div className="interface">
          <article className="itens-conteiner">
            <div className="txt-itens">
              <h3><span>Bairros</span> mais<br /> limpos</h3>
              <p>
                Acompanhe e solucione o acúmulo de lixo na sua rua com rapidez.
                O UECI garante um ambiente urbano mais saudável, limpo e
                agradável para todos os moradores.
              </p>
            </div>
            <div className="img-itens">
              <img src={`${publicImagesPath}vantagens_edit-1.png`} alt="Bairro limpo" />
            </div>
          </article>

          <article className="itens-conteiner">
            <div className="img-itens">
              <img src={`${publicImagesPath}vantagens_edit-2.png`} alt="Morador usando o sistema de coleta" />
            </div>
            <div className="txt-itens">
              <h3><span>Poder</span> na sua<br /> mão</h3>
              <p>
                Reporte problemas de coleta em tempo real diretamente pelo
                aplicativo e acompanhe todo o processo de resolução do seu
                bairro com transparência total.
              </p>
            </div>
          </article>

          <article className="itens-conteiner">
            <div className="txt-itens">
              <h3><span>Cuidou,</span><br /> ganhou</h3>
              <p>
                Ganhe pontos e troféus* ao descartar corretamente e ajudar sua
                região. O seu engajamento comunitário transforma o bairro e
                rende prêmios e benefícios exclusivos.
              </p>
            </div>
            <div className="img-itens">
              <img src={`${publicImagesPath}vantagens_edit-3.png`} alt="Recompensas por cuidar do bairro" />
            </div>
          </article>

          <article className="itens-conteiner invertido">
            <div className="img-itens">
              <img src={`${publicImagesPath}vantagens_edit-4.png`} alt="Rede inteligente de coleta" />
            </div>
            <div className="txt-itens">
              <h3><span>Conexão</span> direta e<br /> inteligente</h3>
              <p>
                Integramos você, a Prefeitura e os catadores em uma única rede
                rápida, otimizando rotas de coleta e garantindo a máxima
                eficiência no serviço público.
              </p>
            </div>
          </article>

          <article className="itens-conteiner">
            <div className="txt-itens">
              <h3><span>Valorização</span> dos<br /> coletores</h3>
              <p>
                Promovemos o respeito e a inclusão dos catadores e garis locais,
                garantindo condições de trabalho dignas e o reconhecimento
                essencial pelo seu papel na cidade.
              </p>
            </div>
            <div className="img-itens">
              <img src={`${publicImagesPath}vantagens_edit-5.png`} alt="Coletores trabalhando" />
            </div>
          </article>
        </div>
      </section>

      <section className="contato_redes_social" id="contato">
        <div className="interface">
          <article className="txt-ctt-rede_social">
            <h3><span>Fale agora com a</span><br /> nossa equipe</h3>
            <p>E acompanhe as atualizações nas redes sociais</p>
          </article>

          <article className="icons-contato">
            <a href="#" aria-label="Chamar no WhatsApp">
              <button type="button"><i className="bi bi-whatsapp" aria-hidden="true" /><span>Chamar no WhatsApp</span></button>
            </a>
            <a href="#" aria-label="Enviar e-mail">
              <button type="button"><i className="bi bi-envelope-at-fill" aria-hidden="true" /><span>Enviar E-mail</span></button>
            </a>
            <a href="#" aria-label="Ver Instagram">
              <button type="button"><i className="bi bi-instagram" aria-hidden="true" /><span>Ver Instagram</span></button>
            </a>
            <a href="#" aria-label="Ligar">
              <button type="button"><i className="bi bi-telephone-fill" aria-hidden="true" /><span>Ligar</span></button>
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
