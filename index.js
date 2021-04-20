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
contaCorrenteEvelyn.cliente = cliente1;
contaCorrenteEvelyn.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteEvelyn.transferir(valor, conta2);
console.log(cliente1);