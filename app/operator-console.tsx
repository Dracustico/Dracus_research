"use client";

import { useEffect, useMemo, useState } from "react";

type SignId = keyof typeof defaults;

const defaults = {
  eyebrow: "Laboratório independente",
  heroTitle: "A arquitetura da complexidade",
  heroSubtitle: "Investigamos como unidades, restrições e relações locais formam trajetórias, campos, linguagens, instrumentos e sistemas cognitivos.",
  manifesto: "“Perguntas se tornam mecanismos. Mecanismos se tornam experimentos.”",
  methodTitle: "Intuição não é prova. É o início do percurso.",
  methodBody: "Cada pesquisa atravessa definição, formalização, implementação, experimento, registro e publicação gradual. O estado de maturidade permanece visível.",
  researchTitle: "Campos de pesquisa",
  lolaTitle: "A Medusa é o rosto local da Lola.",
  lolaBody: "Nesta fase, Professor Lola orienta por textos editoriais revisados. O Dragão representa sua função crítica: distingue demonstração, hipótese e limite.",
  stateTitle: "Portal em fundação curatorial",
  stateBody: "A estrutura pública está sendo construída sob revisão humana. Nenhum conteúdo desta prévia constitui publicação científica consolidada.",
};

const labels: Record<SignId, string> = {
  eyebrow: "Identidade curta",
  heroTitle: "Letreiro principal",
  heroSubtitle: "Apresentação da Ágora",
  manifesto: "Inscrição do manifesto",
  methodTitle: "Título do método",
  methodBody: "Descrição do método",
  researchTitle: "Título das pesquisas",
  lolaTitle: "Título do Professor Lola",
  lolaBody: "Apresentação do Professor Lola",
  stateTitle: "Estado do portal",
  stateBody: "Nota de estado",
};

const maturityOptions = ["Conceito", "Hipótese", "Modelo", "Protótipo", "Experimento", "Resultado preliminar"];

export function OperatorConsole() {
  const [open, setOpen] = useState(false);
  const [signs, setSigns] = useState(defaults);
  const [maturity, setMaturity] = useState("Protótipo");
  const [instruction, setInstruction] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedDraft = localStorage.getItem("dracus-operator-draft");
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        window.setTimeout(() => {
          setSigns({ ...defaults, ...parsed.signs });
          setMaturity(parsed.maturity ?? "Protótipo");
          setInstruction(parsed.instruction ?? "");
        }, 0);
      } catch { localStorage.removeItem("dracus-operator-draft"); }
    }

    const openButtons = document.querySelectorAll("[data-open-operator]");
    const openConsole = () => setOpen(true);
    openButtons.forEach((button) => button.addEventListener("click", openConsole));
    return () => openButtons.forEach((button) => button.removeEventListener("click", openConsole));
  }, []);

  useEffect(() => {
    Object.entries(signs).forEach(([id, value]) => {
      document.querySelectorAll(`[data-sign-id="${id}"]`).forEach((node) => { node.textContent = value; });
    });
  }, [signs]);

  const changedCount = useMemo(
    () => (Object.keys(defaults) as SignId[]).filter((key) => signs[key] !== defaults[key]).length,
    [signs],
  );

  function saveDraft() {
    localStorage.setItem("dracus-operator-draft", JSON.stringify({ signs, maturity, instruction, updatedAt: new Date().toISOString() }));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  function exportInstruction() {
    const payload = JSON.stringify({ version: "DRS-WEB-0.1", maturity, signs, instruction, publicationAuthorized: false }, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "instrucao-dracus.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function restore() {
    setSigns(defaults);
    setMaturity("Protótipo");
    setInstruction("");
    localStorage.removeItem("dracus-operator-draft");
  }

  return (
    <div className={open ? "operator-shell is-open" : "operator-shell"} aria-hidden={!open}>
      <button className="operator-backdrop" aria-label="Fechar cabine" onClick={() => setOpen(false)} />
      <aside className="operator-panel" role="dialog" aria-modal="true" aria-labelledby="operator-title">
        <header>
          <div>
            <p>DRACUS · CONTROLE LOCAL</p>
            <h2 id="operator-title">Cabine do operador</h2>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Fechar">×</button>
        </header>
        <div className="operator-notice">
          <strong>Rascunho protegido</strong>
          <span>Nada aqui publica ou altera o domínio.</span>
        </div>
        <label>
          Maturidade desta versão
          <select value={maturity} onChange={(event) => setMaturity(event.target.value)}>
            {maturityOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <div className="operator-fields">
          {(Object.keys(defaults) as SignId[]).map((id) => (
            <label key={id}>
              {labels[id]}
              <textarea rows={id.toLowerCase().includes("body") || id === "heroSubtitle" ? 3 : 2} value={signs[id]} onChange={(event) => setSigns({ ...signs, [id]: event.target.value })} />
            </label>
          ))}
        </div>
        <label>
          Instrução para a próxima mudança
          <textarea rows={4} value={instruction} onChange={(event) => setInstruction(event.target.value)} placeholder="Ex.: reduzir a ênfase visual do manifesto e preparar uma página para GHF-001." />
        </label>
        <p className="operator-summary">{changedCount} letreiro{changedCount === 1 ? " alterado" : "s alterados"}</p>
        <div className="operator-actions">
          <button className="save" onClick={saveDraft}>{saved ? "Rascunho salvo" : "Salvar neste navegador"}</button>
          <button onClick={exportInstruction}>Exportar instrução</button>
          <button className="danger" onClick={restore}>Restaurar textos</button>
        </div>
      </aside>
    </div>
  );
}
