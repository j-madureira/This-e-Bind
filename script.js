function saberSobrenome(){
    console.log(this.sobrenome);
}

let pessoa = {
    nome: "Jonas",
    sobrenome: "Marvim",
    nSobrenome: saberSobrenome
}

let descSobrenome = saberSobrenome.bind(pessoa);

descSobrenome();