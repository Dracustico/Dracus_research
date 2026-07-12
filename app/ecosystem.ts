export type EntityMaturity =
  | "conceito"
  | "modelo"
  | "protótipo"
  | "experimento";

export type MathematicalEntity = {
  id: string;
  name: string;
  domain: string;
  symbol: string;
  state: string;
  maturity: EntityMaturity;
  invariants: readonly string[];
  operators: readonly string[];
  relatesTo: readonly string[];
};

export const mathematicalEntities: readonly MathematicalEntity[] = [
  {
    id: "maia-cell",
    name: "Célula de Maia",
    domain: "Geometria",
    symbol: "3³",
    state: "27 nós · três eixos · três vias",
    maturity: "modelo",
    invariants: ["identidade dos nós", "orientação dos eixos", "proveniência do percurso"],
    operators: ["avançar", "mediar", "retornar", "mudar de plano"],
    relatesTo: ["harmonic-path", "scientific-memory"],
  },
  {
    id: "harmonic-path",
    name: "Percurso Harmônico",
    domain: "Topologia",
    symbol: "→",
    state: "trajetória aberta e verificável",
    maturity: "protótipo",
    invariants: ["não repetir aresta sem regra", "registrar cada transição"],
    operators: ["expandir", "fechar", "torcer", "comparar"],
    relatesTo: ["maia-cell", "resonance-field"],
  },
  {
    id: "resonance-field",
    name: "Campo Ressonante",
    domain: "Acústica",
    symbol: "ƒ",
    state: "frequência · fase · intensidade · tempo",
    maturity: "experimento",
    invariants: ["preservar condições de medição", "distinguir sinal e interpretação"],
    operators: ["excitar", "medir", "decompor", "correlacionar"],
    relatesTo: ["harmonic-path", "scientific-memory"],
  },
  {
    id: "syllabic-unit",
    name: "Unidade Silábica",
    domain: "Linguagem",
    symbol: "σ",
    state: "estrutura pronunciável explicável",
    maturity: "protótipo",
    invariants: ["regra declarada", "decisão reproduzível", "exceção justificada"],
    operators: ["reconhecer", "agrupar", "fechar", "explicar"],
    relatesTo: ["scientific-memory"],
  },
  {
    id: "scientific-memory",
    name: "Memória Científica",
    domain: "Epistemônica",
    symbol: "μ",
    state: "versões · fontes · decisões · limites",
    maturity: "modelo",
    invariants: ["não apagar história", "atribuir autoria", "separar evidência de hipótese"],
    operators: ["registrar", "relacionar", "versionar", "auditar"],
    relatesTo: ["maia-cell", "harmonic-path", "resonance-field", "syllabic-unit"],
  },
] as const;

export const ecosystemConstitution = [
  "Existir por identidade e invariantes, não por vontade arbitrária.",
  "Transformar-se somente por operadores declarados.",
  "Registrar a causa, a versão e o efeito de cada transição.",
  "Distinguir dado, hipótese, modelo, experimento e interpretação.",
  "Cooperar por interfaces abertas sem perder a identidade local.",
  "Permanecer exportável e executável sem fornecedor obrigatório.",
] as const;
