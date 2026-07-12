# Arquitetura proposta — Portal Dracus Research

**Status:** proposta preliminar; depende da auditoria do repositório oficial.

## Princípio estrutural

Separar permanentemente três superfícies:

1. **Portal público permanente (`dracus.com.br`)** — conteúdo autorizado, páginas institucionais, publicações e demonstrações leves; deve permanecer disponível com o notebook desligado.
2. **Laboratório conectado (`lab.dracus.com.br`)** — experiências interativas deliberadamente publicadas, sem acesso direto a arquivos privados.
3. **Núcleo privado local** — dados brutos, hipóteses reservadas, banco principal, código experimental e lógica cognitiva integral da Lola Psyca.

Nenhum dado deve atravessar do núcleo privado para o portal sem um processo explícito de revisão e exportação.

## Portal público mínimo

Rotas iniciais:

| Rota | Função |
|---|---|
| `/` | Identidade, visão geral, projetos e acesso principal |
| `/research` | Campos e linhas de pesquisa |
| `/ghf-001` | Geometria e renderização acústica experimental |
| `/experimentos` | Galeria de resultados previamente aprovados |
| `/publicacoes` | Artigos, livros e ensaios |
| `/sobre` | Instituto, manifesto, autoria e princípios |
| `/laboratorio` | Estado do laboratório e alternativas quando offline |

O primeiro lançamento deve provar identidade própria, resultado demonstrável do GHF-001 e capacidade de evolução sem reconstrução integral.

## Fluxo seguro de publicação experimental

Cada experimento aprovado deve ser exportado como unidade pública independente, contendo somente artefatos revisados:

```text
experimento aprovado
  -> exportação sanitizada
  -> metadados públicos
  -> imagem ou vídeo otimizado
  -> texto explicativo
  -> validação automática
  -> revisão autoral
  -> publicação
```

Estrutura pública conceitual:

```text
public/experiments/GHF-001-EXP-0007/
  preview.webp
  loop.webm
  fallback.webp
  metadata.json
  index.md
```

Arquivos como dados brutos, parâmetros reservados, bancos locais e código cognitivo não pertencem a esse pacote.

## Comportamento do laboratório

O portal consulta somente um indicador público e limitado de disponibilidade:

- **online:** oferece entrada no laboratório;
- **offline ou indisponível:** permanece funcional e apresenta galeria, gravações e resultados arquivados;
- **estado desconhecido:** assume indisponibilidade com mensagem neutra.

Nenhuma falha do laboratório deve quebrar navegação, conteúdo ou mídia do domínio principal.

## Sistema visual

### Gramática comum

- arquitetura clássica em ruínas;
- pedra, carvão e bronze envelhecido;
- luz solar atmosférica e campos geométricos frios;
- tecnologia discreta, quase arqueológica;
- conhecimento incorporado ao espaço;
- animação lenta, interrompível e compatível com redução de movimento.

### Identidade por área

| Área | Espaço conceitual |
|---|---|
| GHF-001 | Câmara do Cubo de Maia |
| Acústica | Anfiteatro ressonante |
| Linguagem | Arquivo das letras |
| Lola Psyca | Câmara cognitiva/oráculo |
| Publicações | Biblioteca viva |
| Experimentos | Galeria de instrumentos |

### Mídia

- WebP/AVIF para imagens responsivas;
- WebM/MP4 para cenas atmosféricas;
- SVG apenas para símbolos e diagramas vetoriais controlados;
- Canvas/WebGL para simulações futuras;
- alternativa estática para toda animação ou conteúdo interativo.

## Internacionalização

Português é o idioma inicial. Conteúdo e componentes devem nascer preparados para inglês e espanhol, sem duplicação manual de estrutura. URLs, metadados, navegação e textos de acessibilidade devem acompanhar o idioma ativo.

## Requisitos não funcionais

- experiência completa em celular e computador;
- navegação por teclado e foco visível;
- contraste legível sobre imagens complexas;
- respeito a `prefers-reduced-motion`;
- carregamento progressivo de mídia pesada;
- portal utilizável sem JavaScript sempre que razoável;
- nenhuma credencial ou segredo no código público;
- teste ou inspeção verificável para cada funcionalidade;
- autoria “Dracus” preservada.

## Estratégia de implementação

1. Auditar e preservar o repositório oficial.
2. Criar a constituição técnica (`AGENTS.md`) e documentos de escopo.
3. Definir o limite público/privado e o catálogo de conteúdo autorizado.
4. Implementar o portal mínimo com conteúdo provisório claramente marcado.
5. Validar build, links, responsividade, acessibilidade e mídia.
6. Publicar primeiro em endereço de validação.
7. Conectar `dracus.com.br` somente após aprovação autoral.
8. Implementar exportador sanitizado de experimentos.
9. Preparar `lab.dracus.com.br` e o túnel em etapa separada.

## Decisões pendentes

- localização e estado do repositório oficial;
- plataforma definitiva de hospedagem do portal;
- direitos de uso das três imagens fornecidas;
- conteúdo científico autorizado para a primeira versão;
- endereço e política de acesso ao laboratório;
- textos finais, créditos, contatos e autoria institucional;
- critérios objetivos para um resultado ser classificado como validado.

## Documentos normativos relacionados

- `MATRIZ_INSTITUCIONAL_E_CIENTIFICA.md`: definição pública, missão, convergência, método e frentes de pesquisa.
- `GOVERNANCA_EDITORIAL.md`: maturidade, acesso, tipos editoriais, registro mínimo e fluxo de publicação.

Esses documentos transformam o programa científico em requisitos editoriais, mas não substituem a futura constituição técnica `AGENTS.md`, que deverá ser criada dentro do repositório oficial após sua auditoria.

## Critério para avançar

A implementação visual só deve começar depois que o repositório oficial estiver disponível, seu estado tiver sido preservado e a auditoria real não revelar risco de exposição de material privado.
