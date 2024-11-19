const fs = require('fs')

fs.readFile("./teste.txt", "utf8", (erro, dados) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log(dados)
    }
})

const mensagem = "Texto muito legal, pra ver se funciona"
const mensagem2 = "Outro texto muito legal, com mensagem 2"
const mensagem3 = "Outro texto muito legal, com mensagem 3"

fs.writeFile('teste2oretorno.txt', mensagem, "utf8", (erro) => {
    if(erro) {
        console.log("Deu erro")
    } else {
        console.log("Arquivo escrito com sucesso")
    }
})

fs.writeFile('teste3oretorno.txt', mensagem2, "utf8", (erro) => {
    if(erro) {
        console.log("Deu erro")
    } else {
        console.log("Arquivo escrito com sucesso")
    }
})

fs.appendFile('teste4oretorno.txt', mensagem3, "utf8", (erro) => {
    if(erro) {
        console.log("Deu erro")
    } else {
        console.log("Arquivo escrito com sucesso")
    }
})

fs.unlink('teste4oretorno.txt', (erro) => {
    if(erro) {
        console.log("Não consegui apagar o arquivo")
    } else {
        console.log("Arquivo APAGADO com sucesso")
    }
})