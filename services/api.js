const {get} = require('axios');

const getPeople = async (name) => {
  const result = await get(`https://swapi.dev/api/people/?search=${name}`)
  // console.log(JSON.stringify(result.data)) // Retorno todos os dados, exibindo os [Array]
  return result.data.results.map(mapPeople)
}

const mapPeople = (item) => {
  const data = {name: item.name, height: item.height}
  return data;
}

module.exports = {
  getPeople
}