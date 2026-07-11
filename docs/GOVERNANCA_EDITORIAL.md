# Governança editorial e científica — Dracus Research

**Finalidade:** transformar a matriz institucional em regras aplicáveis ao portal, às publicações e aos pacotes experimentais.

## Regra principal

Toda página de pesquisa, experimento, instrumento ou publicação deve declarar:

- natureza do conteúdo;
- estágio de maturidade;
- responsável autoral;
- data e versão;
- evidências disponíveis;
- limitações conhecidas;
- possibilidade de reprodução;
- nível de acesso;
- relações com projetos e documentos anteriores.

Arte, convicção teórica e evidência experimental nunca devem aparecer como equivalentes.

## Escala de maturidade

| Estado | Definição editorial | Evidência mínima |
|---|---|---|
| Conceito | ideia definida, ainda sem formalização suficiente | definição e questão investigativa |
| Hipótese | proposição examinável | condições de teste ou refutação |
| Modelo | representação formal ou computacional | regras, variáveis e versão |
| Protótipo | mecanismo executável em desenvolvimento | demonstração e limitações |
| Experimento | procedimento executado e registrado | método, parâmetros, entrada e saída |
| Resultado preliminar | observação ainda sem replicação suficiente | registro de execução e análise provisória |
| Resultado reproduzido | observação repetida em condições registradas | execuções comparáveis |
| Validado internamente | passou pelos critérios definidos pelo laboratório | relatório de validação interna |
| Validação independente | avaliado ou reproduzido por terceiros | referência externa verificável |
| Publicação consolidada | integra o corpo estável do projeto | revisão autoral e histórico preservado |

O estado nunca deve ser promovido automaticamente. Toda promoção exige registro de justificativa, evidência e responsável.

## Níveis de acesso

### Público

Identidade institucional, objetivos, fundamentos, demonstrações autorizadas, artigos, resultados selecionados, modelos simplificados, documentação pública, experimentos reproduzíveis e mídia aprovada.

### Técnico controlado

Implementações em desenvolvimento, bancos intermediários, documentação interna, versões instáveis, parâmetros sensíveis e resultados ainda não interpretados.

### Reservado

Credenciais, dados pessoais, mecanismos proprietários, hipóteses estratégicas, sistemas cognitivos internos, código não autorizado, arquivos brutos e decisões institucionais privadas.

Conteúdo técnico controlado ou reservado não pode ser copiado para o portal público como forma de conveniência operacional.

## Tipos editoriais

| Tipo | Conteúdo esperado |
|---|---|
| Página de pesquisa | problema, definições, estado, linhas de evidência e questões abertas |
| Instrumento | finalidade, versão, entradas, saídas, funcionamento e limites |
| Experimento | hipótese, método, parâmetros, condições, resultados e reprodução |
| Artigo técnico | problema, método, resultado, discussão e limitações |
| Caderno de laboratório | desenvolvimento, hipóteses, erros e decisões em ordem temporal |
| Relatório experimental | execução reproduzível e análise delimitada |
| Tratado teórico | arquitetura conceitual ampla, com estado epistêmico explícito |
| Documentação de software | instalação, uso, arquitetura, versão e testes |
| Ensaio filosófico | exploração conceitual, sem alegação de validação experimental |
| Demonstração visual | resultado ou mecanismo acompanhado de contexto e alternativa acessível |

## Registro mínimo de experimento

```yaml
id: GHF-001-EXP-0007
title: Título descritivo
project: GHF-001
maturity: experimento
access: public
model_version: 0.1.0
executed_at: 2026-07-11T00:00:00-03:00
authors: []
hypothesis: ""
method_summary: ""
parameters: {}
inputs: []
outputs: []
evidence: []
limitations: []
reproduction: ""
review_status: pending
publication_authorized: false
```

O campo `publication_authorized` deve permanecer falso até revisão humana explícita.

## Regras por frente sensível

### GHF e Física Geral

- Apresentar a GHF inicialmente como programa matemático e computacional experimental.
- Identificar proposições físicas como hipótese, interpretação, analogia ou modelo exploratório quando não houver validação correspondente.
- Não empregar linguagem de descoberta estabelecida para resultados internos preliminares.

### Linguagem e arqueolinguística

- Separar regularidade linguística, convenção cultural, interpretação simbólica e evidência mensurável.
- Não afirmar parentesco histórico entre idiomas sem documentação linguística adequada.
- Distinguir análise formal de uso clínico, cultural ou simbólico.

### Lola Psyca

- Publicar função, interface e resultados autorizados, nunca a lógica cognitiva integral.
- Não atribuir consciência ou inteligência geral sem definição operacional e evidência.
- Exigir confirmação antes de executar ações com impacto externo ou publicar conteúdo.

### Matéria inteligente

- Usar o termo somente para respostas materiais estruturadas.
- Declarar explicitamente que a expressão não implica consciência.

## Arquitetura editorial do portal

```text
Dracus Research
├── Início
├── Laboratório
│   ├── Visão geral
│   ├── Metodologia
│   ├── Infraestrutura
│   └── Diário de pesquisa
├── Pesquisas
│   ├── GHF
│   ├── GHF-001 / Maia Generator
│   ├── Acústica experimental
│   ├── LECI e MSI-001
│   ├── Psicomecânica da Linguagem
│   ├── Brasileiro Científico
│   ├── Arqueolinguística
│   ├── Lola Psyca
│   ├── Engenharia cognitiva
│   ├── Epistemônica
│   └── Matéria inteligente
├── Experimentos
├── Instrumentos
├── Publicações
├── Academia
├── Galeria
├── Sobre
└── Apoie o laboratório
```

O portal mínimo não precisa expor toda essa árvore de imediato. Ela funciona como mapa de crescimento; a primeira navegação permanece enxuta e agrupa páginas ainda sem acervo suficiente.

## Fluxo de publicação

1. Autor cria ou atualiza o registro no núcleo privado.
2. Evidências e limitações são associadas à versão correta.
3. Um pacote público sanitizado é gerado, sem arquivos privados.
4. Verificações automáticas validam estrutura, links, mídia e campos obrigatórios.
5. Dragão, como função crítica, registra inconsistências e alegações excessivas.
6. Revisão humana decide maturidade, acesso e autorização.
7. O portal publica apenas o pacote aprovado.
8. Alterações futuras mantêm histórico e vínculo com a versão anterior.

## Critérios de aceitação editorial

- Nenhuma página científica sem estado de maturidade visível.
- Nenhum experimento público sem versão, método, limitações e autorização.
- Nenhuma alegação validada sem evidência correspondente.
- Nenhum conteúdo reservado incorporado ao pacote público.
- Nenhuma manifestação visual de Lola substitui fonte, método ou evidência.
- Toda visualização possui explicação textual e alternativa estática quando necessário.
- Datas e versões são apresentadas de forma inequívoca.
- Correções preservam histórico em vez de apagar o erro silenciosamente.

## Estado de implementação

Esta governança está documentada, mas ainda não foi aplicada ao código porque o repositório oficial não está presente no workspace. A criação de esquemas, componentes, validações e páginas depende da auditoria desse repositório.
