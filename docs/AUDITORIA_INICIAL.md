# Auditoria inicial — Dracus Research

**Data:** 11 de julho de 2026  
**Escopo:** diretório de trabalho disponibilizado ao Codex

## Resultado executivo

O repositório do portal **não está presente no workspace**. O diretório contém somente as pastas operacionais `outputs/` e `work/`, sem arquivos de aplicação, metadados Git ou configuração de hospedagem. Por isso, esta etapa não modificou interface, código ou dados do Dracus Research.

## Evidências verificadas

- Nenhum arquivo de projeto foi localizado no diretório de trabalho.
- O diretório não é um repositório Git e não possui histórico, branches ou remotos verificáveis.
- Não existe `.openai/hosting.json` nem outra configuração de hospedagem no escopo inspecionado.
- Não há `package.json`, arquivos HTML/CSS/JavaScript, conteúdo Markdown, mídia pública ou testes.
- As três imagens de referência e o roteiro textual foram recebidos como anexos externos, não como parte de um repositório versionado.

## Itens que não puderam ser auditados

- árvore real do repositório `dracustico.github.io`;
- tecnologias, dependências e pontos de entrada;
- estado atual do GitHub Pages e domínio personalizado;
- componentes incompletos, duplicados ou quebrados;
- arquivos públicos que possam conter material reservado;
- build, links, acessibilidade, responsividade e desempenho;
- existência da branch `backup-pre-portal` e de um commit de preservação.

## Risco atual

Começar a implementação neste diretório criaria um projeto novo sem preservar nem compreender o portal existente. Isso contrariaria a Ordem 01 do roteiro e poderia produzir uma segunda base desconectada do repositório oficial.

## Materiais de referência recebidos

As imagens estabelecem uma direção visual consistente: ruínas clássicas, pedra escura, bronze envelhecido, luz atmosférica, geometria luminosa e tipografia editorial. Elas devem ser tratadas como referências conceituais; antes da publicação, é necessário confirmar autoria, licença e quais arquivos finais poderão integrar o portal.

O sistema conceitual possui uma única arquitetura central, Lola Psyca. Professor Lola é sua função pedagógica; a Medusa é seu avatar local; e o Dragão é seu órgão interno de crítica e resistência epistêmica. A lógica cognitiva completa permanece reservada.

## Dependência para concluir a auditoria

Disponibilizar no workspace a pasta clonada do repositório oficial `dracustico.github.io` (incluindo a pasta `.git`) ou conectar o repositório correspondente. Quando isso ocorrer, a auditoria deverá ser reexecutada antes de qualquer alteração de interface.

## Próxima execução recomendada

1. Confirmar que o repositório correto está no workspace.
2. Inventariar todos os arquivos, inclusive ocultos, sem modificá-los.
3. Registrar branch e commit atuais.
4. Verificar Pages, domínio, automações e segredos acidentalmente versionados.
5. Executar apenas verificações não destrutivas.
6. Atualizar este relatório com descobertas reais.
7. Somente então criar `AGENTS.md` e os documentos constitucionais da Ordem 02.

## Estado da Ordem 01

**Bloqueada por ausência do repositório.** Nenhum arquivo existente foi excluído, movido ou sobrescrito.
