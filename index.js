class Cliente{
  nome;
  cpf;
}

class ContaCorrente{
  agencia;
  saldo;
  sacar(valor){
    if(this.saldo >= valor) {
      this.saldo -= valor;
    }
  }

  depositar(valor){
    if(valor > 0){
      this.saldo += valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Evelyn";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44488855598;

const contaCorrenteEvelyn = new ContaCorrente();
contaCorrenteEvelyn.saldo = 0;
contaCorrenteEvelyn.agencia = 1001;

contaCorrenteEvelyn.depositar(100);
contaCorrenteEvelyn.sacar(50)

console.log(contaCorrenteEvelyn);