import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Evelyn", 11122233309);

const contaCorrenteEvelyn = new Conta("corrente", 0, cliente1, 1001);
contaCorrenteEvelyn.depositar(500);
contaCorrenteEvelyn.sacar(100);

const contaPoupanca = new Conta("poupanca", 50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteEvelyn);
console.log("Número de contas:", ContaCorrente.numeroDeContas);