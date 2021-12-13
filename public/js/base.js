const nome = "Davi";
let nome2 = "";
let pessoaDefault = {
    nome: "Davi",
    idade: "17",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
    nome: "Davi",
    idade: "17",
    trabalho: "Programador"
},
{
    nome: "Maria Silva",
    idade: "30",
    trabalho: "UX/UI Designer"
}
];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:")
console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome");
console.log(pessoa.nome)

console.log("idade");
console.log(pessoa.idade)

console.log("trabalho");
console.log(pessoa.trabalho)
}


function adcionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("=======IMPRIMIR PESSOAS========")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade");
console.log(item.idade)

console.log("trabalho");
console.log(item.trabalho)
    })
}

imprimirPessoas();

adcionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

//imprimirPessoa(pessoaDefault);

//imprimirPessoa ({
    //nome: "Maria Silva",
    //idade: "30",
    //trabalho: "UX/UI Designer"
//})

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();