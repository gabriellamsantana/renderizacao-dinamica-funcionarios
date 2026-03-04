const funcionarios = [
  { nome: "Ana", cargo: "Desenvolvedora" },
  { nome: "Carlos", cargo: "Designer" },
  { nome: "Beatriz", cargo: "Gerente de Projetos" }
];

const lista = document.getElementById("lista-funcionarios");

funcionarios.forEach(funcionario => {
  const item = document.createElement("li");
  item.textContent = `${funcionario.nome} - ${funcionario.cargo}`;
  lista.appendChild(item);
});