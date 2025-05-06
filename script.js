let Alunos = [];

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;

    let Aluno = { nome, idade, curso };
    Alunos.push(Aluno);

    let lista = document.getElementById("listaAlunos");
    let item = document.createElement("li");
    item.textContent = `${nome} - ${idade} anos - Curso: ${curso}`;
    lista.appendChild(item);

    document.getElementById("formulario").reset();

    console.log(Alunos);
});
