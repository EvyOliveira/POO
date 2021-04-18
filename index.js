class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "Evelyn";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 44488855598;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.nome = "Gustavo";
cliente3.cpf = 44488855598;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);