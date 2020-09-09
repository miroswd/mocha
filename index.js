const assert = require('assert');
const {getPeople} = require('./services/api')
// Mocha deve ser instalado globalmente e com permissão ```sudo yarn global add mocha```
// Para conseguir rodar o comando mocha, mas para o sistema entender que está usando o mocha,
// precisa instalar como ferramenta de desenvolvimento -- yarn add -D mocha

// Instalamos o pacote nock, para simular requisições
const nock = require('nock')

// assert.ok(true) // Não retorna nada
// assert.ok(false) // Retorna o erro

/**
 * Primeira parte do teste, definir o esperado, construir a assinatura, fazer o teste dar errado
 */




// switch de teste
describe('Star Wars Tests', function(){
  // antes de tudo
  this.beforeEach(() => {
    const response = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'R2-D2',
          height: '96',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, blue',
          eye_color: 'red',
          birth_year: '33BBY',
          gender: 'n/a',
          homeworld: 'http://swapi.dev/api/planets/8/',
          vehicles: [],
          starships: [],
          created: '2014-12-10T15:11:50.376000Z',
          edited: '2014-12-20T21:17:50.311000Z',
          url: 'http://swapi.dev/api/people/3/'
        }
      ]
    }
    nock('https://swapi.dev/api/people').get('/?search=r2-d2').reply(200, response)
  })
  // os testes propriamente ditos
  it ('deve buscar o r2-d2 com o formato correto', async () => {
    const expected = [{name:'R2-D2', height:'96'}]
    const baseName = `r2-d2`
    const result = await getPeople(baseName)

    assert.deepEqual(result, expected) // Rodar >>> mocha nome_do_arquivo
  })
})