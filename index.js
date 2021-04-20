import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Evelyn", 11122233309);

const cliente2 = new Cliente("Alice", 44488855598);
console.log(cliente2.cpf);

const contaCorrenteEvelyn = new ContaCorrente(1001, cliente1);
contaCorrenteEvelyn.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteEvelyn.transferir(valor, conta2);
console.log(cliente2);