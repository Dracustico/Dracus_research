import type { Metadata } from "next";
import Image from "next/image";
import { OperatorConsole } from "./operator-console";
import { EcosystemSection } from "./ecosystem-section";

export const metadata: Metadata = {
  title: "Dracus Research — Laboratório independente",
  description:
    "Geometria, acústica, linguagem e engenharia cognitiva em um sistema vivo de pesquisa, demonstração e ensino.",
};

const realms = [
  ["Geometria", "Câmara das formas", "Modelo"],
  ["Acústica", "Anfiteatro ressonante", "Experimento"],
  ["Linguagem", "Biblioteca dos símbolos", "Protótipo"],
  ["Lola Psyca", "Câmara cognitiva", "Conceito arquitetural"],
] as const;

export default function Home() {
  return (
    <main>
      <OperatorConsole />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Dracus Research, início">
          <span className="brand-mark" aria-hidden="true">Ω</span>
          <span>Dracus Research</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#pesquisas">Pesquisas</a>
          <a href="#metodo">Método</a>
          <a href="#ecossistema">Ecossistema</a>
          <a href="#lola">Professor Lola</a>
        </nav>
        <button className="operator-trigger" data-open-operator aria-label="Abrir cabine do operador">
          Operar portal
        </button>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/art/environments/agora-reference.jpg"
          alt="Ágora em ruínas clássicas iluminada pelo crepúsculo"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow" data-sign-id="eyebrow">Laboratório independente</p>
          <h1 id="hero-title" data-sign-id="heroTitle">A arquitetura da complexidade</h1>
          <p className="hero-lede" data-sign-id="heroSubtitle">
            Investigamos como unidades, restrições e relações locais formam trajetórias,
            campos, linguagens, instrumentos e sistemas cognitivos.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#pesquisas">Percorrer o laboratório</a>
            <a className="secondary-action" href="#metodo">Conhecer o método</a>
          </div>
        </div>
        <blockquote data-sign-id="manifesto">
          “Perguntas se tornam mecanismos. Mecanismos se tornam experimentos.”
        </blockquote>
      </section>

      <section className="intro" id="metodo">
        <p className="section-index">01 / MÉTODO</p>
        <div>
          <h2 data-sign-id="methodTitle">Intuição não é prova. É o início do percurso.</h2>
          <p data-sign-id="methodBody">
            Cada pesquisa atravessa definição, formalização, implementação, experimento,
            registro e publicação gradual. O estado de maturidade permanece visível.
          </p>
        </div>
      </section>

      <section className="realms" id="pesquisas" aria-labelledby="realms-title">
        <div className="section-heading">
          <p className="section-index">02 / TERRITÓRIOS</p>
          <h2 id="realms-title" data-sign-id="researchTitle">Campos de pesquisa</h2>
        </div>
        <div className="realm-grid">
          {realms.map(([title, place, status], index) => (
            <article className="realm-card" key={title}>
              <span className="realm-number">0{index + 1}</span>
              <p>{place}</p>
              <h3>{title}</h3>
              <span className="status">{status}</span>
              <a href="#estado" aria-label={`Explorar ${title}`}>Explorar <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="lola" id="lola">
        <div className="lola-sigil" aria-hidden="true"><span>Ω</span></div>
        <div>
          <p className="eyebrow">Professor Lola · estágio 1</p>
          <h2 data-sign-id="lolaTitle">A Medusa é o rosto local da Lola.</h2>
          <p data-sign-id="lolaBody">
            Nesta fase, Professor Lola orienta por textos editoriais revisados. O Dragão
            representa sua função crítica: distingue demonstração, hipótese e limite.
          </p>
        </div>
        <aside className="dragon-note">
          <strong>Dragão · evidência</strong>
          <p>A interface demonstra a arquitetura editorial; ainda não representa consciência artificial ativa.</p>
        </aside>
      </section>

      <EcosystemSection />

      <section className="current-state" id="estado">
        <p className="section-index">04 / ESTADO ATUAL</p>
        <h2 data-sign-id="stateTitle">Portal em fundação curatorial</h2>
        <p data-sign-id="stateBody">
          A estrutura pública está sendo construída sob revisão humana. Nenhum conteúdo
          desta prévia constitui publicação científica consolidada.
        </p>
      </section>

      <footer>
        <span>DRACUS RESEARCH</span>
        <p>Coerência · honestidade intelectual · reprodutibilidade</p>
        <span>DRS-WEB-0.1 · RASCUNHO</span>
      </footer>
    </main>
  );
}
