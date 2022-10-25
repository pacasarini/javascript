/* const funcoes = require('./funcoes_auxiliares');

console.log(funcoes.gets());  */

//da forma abaixo eh mais avançado e podemos ter varios codigos dentro de 1:
const { gets, print } = require('./funcoes_auxiliares');

print(gets());