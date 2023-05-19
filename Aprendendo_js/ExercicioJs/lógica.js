let oldePersonName = prompt("Digite o nome da pessoa mais velha");
let oldePersonAge = prompt("Digite a idade da pessoa mais velha");

let yougerPersonName = prompt("Digite o nome da pessoa mais nova");
let yougerPersonAge = prompt("Digite a idade da pessoa mais nova");

let ageDifference = oldePersonAge - yougerPersonAge;

alert(
    "Pessoa mais velha: " + oldePersonName + "\nIdade: " + oldePersonAge +
    "\n\nPessoa mais nova: " + yougerPersonName + "\nIdade: " + yougerPersonAge +
    "\n\nDiferença de idade: " + ageDifference
);

