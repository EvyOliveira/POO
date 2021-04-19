import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Evelyn";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44488855598;

const contaCorrenteEvelyn = new ContaCorrente();

contaCorrenteEvelyn.agencia = 1001;
contaCorrenteEvelyn.depositar(300);
const valorSacado = contaCorrenteEvelyn.sacar(50)
console.log(valorSacado);

console.log(contaCorrenteEvelyn);