<h1>Mocha</h1>
<h3>Criando teste utilizando Mocha</h3>

<h5>O mocha deve ser instalado globalmente</h5>

```
yarn global add mocha # dependendo, precisa usar o sudo
``` 

<h5>Para o sistema entender o comando mocha, deve ser instalado como dependência de desenvolvimento</h5>

```
yarn add -D mocha
```

<h5>Rodando somente o comando mocha, será buscado o arquivo 'test.js'</h5>

```
# Rodando outro arquivo
mocha index.js
```

<h3>Primeira fase do teste</h3>

- [x] Definir o esperado
- [x] Construir a assinatura
- [x] Fazer o teste
- [x] Retornar com erro
