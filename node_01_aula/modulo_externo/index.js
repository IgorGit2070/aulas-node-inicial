const minimist = require('minimist')

const argumentos = minimist(process.argv.slice(2))

console.log(argumentos)

//node index.js --nome=Alejandro

const nome = argumentos["nome"]

console.log(nome)

//node index.js --nome=Alejandro

//node index.js --nome=Alejandro --sobrenome=Fernando

const sobrenome = argumentos["sobrenome"]

console.log(sobrenome)

console.log(`O nome dele é ${nome}, e seu sobrenome é: ${sobrenome}`)

//node index.js --nome=Alejandro --sobrenome=Fernando