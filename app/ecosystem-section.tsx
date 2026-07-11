import { ecosystemConstitution, mathematicalEntities } from "./ecosystem";

export function EcosystemSection() {
  return (
    <section className="ecosystem" id="ecossistema" aria-labelledby="ecosystem-title">
      <div className="section-heading ecosystem-heading">
        <div>
          <p className="section-index">03 / ECOSSISTEMA AUTÔNOMO</p>
          <h2 id="ecosystem-title">Entidades matemáticas em relação</h2>
        </div>
        <p>
          Cada ente conserva identidade, estado, invariantes e operadores. O conjunto
          cresce por transições verificáveis — não por arbítrio.
        </p>
      </div>

      <div className="entity-grid">
        {mathematicalEntities.map((entity) => (
          <article className="entity-card" key={entity.id} id={entity.id}>
            <div className="entity-symbol" aria-hidden="true">{entity.symbol}</div>
            <div>
              <p>{entity.domain} · {entity.maturity}</p>
              <h3>{entity.name}</h3>
              <span>{entity.state}</span>
            </div>
            <dl>
              <div>
                <dt>Invariantes</dt>
                <dd>{entity.invariants.join(" · ")}</dd>
              </div>
              <div>
                <dt>Operadores</dt>
                <dd>{entity.operators.join(" · ")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="constitution">
        <p className="eyebrow">Constituição do organismo</p>
        <ol>
          {ecosystemConstitution.map((principle) => <li key={principle}>{principle}</li>)}
        </ol>
      </div>
    </section>
  );
}
