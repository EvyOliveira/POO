import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Evelyn", 11122233309);

const contaCorrenteEvelyn = new ContaCorrente(0, cliente1, 1001);
contaCorrenteEvelyn.depositar(500);
contaCorrenteEvelyn.sacar(100);

const contaPoupanca = new ContaPoupanca(1001, 50, cliente1);

console.log(contaCorrenteEvelyn);
console.log(contaPoupanca);
console.log("Número de contas:", ContaCorrente.numeroDeContas);
contaCorrenteEvelyn.teste();