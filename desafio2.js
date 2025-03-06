// Calculadora de Partidas Hankeadas 

//Ranking
let ferro = 10;
let bronze = 20;
let prata = 50; 
let ouro  = 80;
let diamante = 90;
let lendario = 100;
let imortal = 101;

//Vitórias
let vitórias = 51;
console.log('Seu rank:');
if (vitórias < ferro) {
    console.log('Ferro');
} else if (vitórias < bronze) {
    console.log('Bronze');
} else if (vitórias < prata) {
    console.log('Prata');
} else if (vitórias < ouro) {
    console.log('Ouro');
} else if (vitórias <= diamante) {
    console.log('Diamante');
} else if (vitórias <= lendario) {
    console.log('Lendário');
} else {
    console.log('Imortal');
}    

//Saldo de vitórias
let derrotas = 10;
let saldoVitorias = vitórias - derrotas;

//Função para calcular o nível
function calcularNivel(saldoVitorias) {
    if (saldoVitorias < 0) {
        return "Negativo";
    } else if (saldoVitorias < 10) {
        return "Ruim";
    } else if (saldoVitorias < 20) {
        return "Regular";
    } else if (saldoVitorias < 30) {
        return "Bom";
    } else if (saldoVitorias < 40) {
        return "Ótimo";
    } else {
        return "Excelente";
    }
}

//Nível
let nivel = calcularNivel(saldoVitorias);

//Mensagem final
let mensagemFinal = "O Herói tem de saldo de vitórias " + (saldoVitorias) + " e está no nível " +  (nivel);
console.log(mensagemFinal)
