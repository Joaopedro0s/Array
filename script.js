let Alunos = [];

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;

    let Aluno = { nome, idade, curso };
    Alunos.push(Aluno);

    let lista = document.getElementById("listaAlunos");
    let item = document.createElement("li");
    item.innerHTML = `${nome} - ${idade} anos - Curso: ${curso}`;
    lista.appendChild(item);

    document.getElementById("formulario").reset();

    console.log(Alunos);
});

document.getElementById("exportar").addEventListener("click", function () {
    // Transforma o array em texto JSON
    let json = JSON.stringify(Alunos, null, 2);

    // Cria um arquivo virtual com os dados
    let blob = new Blob([json], { type: "application/json" });

    // Cria um link invisível para baixar
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "alunos.json"; // nome do arquivo

    // Clica no link automaticamente
    link.click();
});

