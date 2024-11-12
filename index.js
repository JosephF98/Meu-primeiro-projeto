// Importa a biblioteca readline para obter entradas do usuário no terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal que realiza o cálculo do nível do herói
function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Pergunta ao usuário o nome e a quantidade de XP, e executa a função de classificação
rl.question("Digite o nome do herói: ", (nome) => {
    rl.question("Digite a quantidade de XP do herói: ", (xpInput) => {
        const xp = parseInt(xpInput);
        classificarHeroi(nome, xp);
        rl.close();
    });
});