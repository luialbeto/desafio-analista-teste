# Instalações necessárias

npm install -D cypress-cucumber-preprocessor
Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:
Para executar os testes via terminal: npx cypress run
Para executar os testes via browser: npx cypress run --browser chrome --no-exit
Para executar os testes via script salvo em package.json: npm run test:chrome


Configuração do Cypress:
Adicione o trecho abaixo no arquivo de plugins:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
