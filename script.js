var nome = "Ronaldo";
var xp = 7001;
var cargo = '';
for (var i = 0; i < xp; i++) {
    if (xp <= 1000) {
        cargo = "Ferro";
    }
    else if (xp >= 1001 && xp <= 2000) {
        cargo = "Bronze";
    }
    else if (xp >= 2001 && xp <= 5000) {
        cargo = "Prata";
    }
    else if (xp >= 5001 && xp <= 6000) {
        cargo = "Ouro";
    }
    else if (xp >= 6001 && xp <= 7000) {
        cargo = "Platina";
    }
    else if (xp >= 7001 && xp <= 8000) {
        cargo = "Ascendente";
    }
    else if (xp >= 8001 && xp <= 9000) {
        cargo = "Imortal";
    }
    else {
        cargo = "Radiante";
    }
}
console.log("O Her\u00F3i de nome ".concat(nome, " est\u00E1 no n\u00EDvel de ").concat(cargo));
