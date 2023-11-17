let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let circle = "icons/circle-outline.svg";
let checked = "icons/checkbox-marked-circle.svg";

function addTarefa() {
  //pegar o valor digitado no input
  let valorInput = input.value;
  //se nao for vazio nem nulo nem indefinido
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;
    estado = circle;
    let novoItem = `
    <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <img id="icone_${contador}" src=${estado} alt="" />
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">Deletar</button>
        </div>
    </div>
  `;
    //adicionar novo item no main
    main.innerHTML += novoItem;
    //zerar o campo
    input.value = "";
    input.focus();
  }
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    estado = checked;

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    estado = circle;
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

input.addEventListener("keyup", function (event) {
  //se teclou enter (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
