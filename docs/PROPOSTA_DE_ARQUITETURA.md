# Proposta de arquitetura — Dracus Research

**Proposta:** Astro, TypeScript, CSS e Markdown, com geração estática para GitHub Pages.  
**Estado:** não implementado; sujeito à auditoria oficial.

## Superfícies

```text
dracus.com.br            portal público permanente
lab.dracus.com.br        laboratório conectado futuro
núcleo privado local     dados, código e mecanismos reservados
```

## Territórios do palácio da memória

| Área | Espaço |
|---|---|
| Início | Ágora central |
| GHF | Câmara das proporções |
| GHF-001 | Câmara do Cubo de Maia |
| Acústica | Anfiteatro ressonante |
| Linguagem | Biblioteca dos símbolos |
| Instrumentação | Oficina de máquinas |
| Física | Observatório |
| Lola Psyca | Câmara cognitiva |
| Publicações | Arquivo e biblioteca |
| Academia | Pórtico de ensino |
| Experimentos | Galeria dos fenômenos |
| Colaboração | Conselho da ágora |

## Árvore proposta

```text
dracustico.github.io/
├── AGENTS.md
├── README.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── docs/
├── src/
│   ├── components/
│   ├── content/{research,publications,experiments,glossary}/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── scripts/
├── public/{art,media,icons,fonts,favicon}/
├── scripts/
└── .github/workflows/
```

## Sistema Lola

```text
Lola Psyca
├── ProfessorLola → avatar Medusa
├── LolaDragon
├── LolaMemory
├── LolaOperator
└── LolaMetacognition
```

Na versão estática, somente Professor Lola e LolaDragon aparecem como componentes editoriais revisados. Não haverá API de IA, conversa aberta ou alegação de consciência artificial.

## Critérios

- geração estática e compatibilidade com Pages;
- Markdown com esquema validado;
- maturidade e acesso obrigatórios;
- PT inicial, preparado para EN e ES;
- conteúdo essencial sem JavaScript;
- acessibilidade e movimento reduzido;
- nenhuma dependência de servidor para o portal público;
- nenhum segredo ou dado privado;
- arte sem texto editorial incorporado.

Preservar, adaptar ou migrar será decidido somente após a auditoria do repositório oficial.
