# Exemplo mais completo de um projeto Node.js com testes automatizados e um pipeline CI/CD usando o GitHub Actions. Neste exemplo, usaremos um aplicativo Node.js simples com testes unitários usando o framework Jest.

Passo 1: Configurar o Projeto

Primeiro, crie um novo repositório no GitHub e clone-o para o seu ambiente de desenvolvimento local.

Passo 2: Estrutura do Projeto

Vamos criar a estrutura básica do projeto. A estrutura de pastas deve ser semelhante a esta:

```bash
meu-projeto/
  |- .github/
  |   |- workflows/
  |       |- main.yml
  |- src/
  |   |- app.js
  |- test/
  |   |- app.test.js
  |- package.json
  |- README.md
```

Passo 3: Código de Exemplo

Aqui está um código de exemplo para app.js, que apenas contém uma função simples que somará dois números:

```javascript
// src/app.js
function somar(a, b) {
  return a + b;
}

module.exports = somar;
```

Passo 4: Testes de Exemplo

Aqui está um teste Jest de exemplo para a função somar:

```javascript
// test/app.test.js
const somar = require('../src/app');

test('soma 1 + 2 para igual a 3', () => {
  expect(somar(1, 2)).toBe(3);
});

test('soma -1 + 1 para igual a 0', () => {
  expect(somar(-1, 1)).toBe(0);
});
```

Passo 5: Configurar o GitHub Actions

Agora, vamos configurar o pipeline CI/CD no arquivo .github/workflows/main.yml:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test
```

Este pipeline é semelhante ao anterior, mas inclui uma etapa para executar os testes usando o comando npm test. Certifique-se de que você tenha o Jest instalado como uma dependência de desenvolvimento no seu package.json.

Passo 6: Empurre para o GitHub

Agora, empurre todas as suas alterações para o GitHub:

```bash
git add .
git commit -m "Adicionar código e testes iniciais"
git push origin main
```

Passo 7: Verificar o Pipeline CI/CD

Vá para a seção "Actions" do seu repositório no GitHub para acompanhar o progresso do pipeline. O GitHub Actions executará automaticamente os testes sempre que você fizer um push para a branch "main".

Este é um exemplo simples de como configurar um pipeline CI/CD com testes automatizados no GitHub usando o GitHub Actions. Você pode expandir esse pipeline adicionando etapas de implantação para ambientes de produção, integração ou teste, dependendo das necessidades do seu projeto.
