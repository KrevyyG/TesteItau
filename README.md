# Testes automatizados

Projeto realizado para teste

## Pré requisitos

Para executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (Eu usei a versão `2.36.0` enquanto escrevia este documento)
- [nodejs](https://nodejs.org/en/) (Eu usei a versão `16.15.0` enquanto escrevia este documento)
- NPM (Eu usei a versão `8.5.5` enquanto escrevia este documento)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/)

**Obs:** Ao instalar o nodejs, o NPM também é instalado automaticamente.

## Instalação

Para instalar as dependências dev, execute `npm install` (ou `npm i` para abreviar).

Para instalar as dependências dev, execute `npm install cypress` (ou `npm i cypress` para abreviar).

**Obs:** é necessário abrir o cypress pela primeira vez para montar um ambiente de testes, execute `npx cypress open`.

## O Teste contém comando personalizado

Comando personalizado é econtrado na pasta cypress/support/commands.js

**Obs:** Lembrando que o arquivo de teste se encontra em cypress/e2e/conta-corrente.spec.cy.js

## Executando os testes

Neste projeto, você pode executar testes em modos interativos e headless em viewports de desktop.

### Modo Headless

Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless.

### Modo interativo

Run `npx cypress open` para abrir o Cypress Test Runner para executar testes no modo interativo.
___

By [Guilherme Oliveira Souza](https://github.com/KrevyyG).
