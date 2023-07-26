//Array para armazenar os dados do formulario
let dadosArmazenados = [];

//Funcao para armazenar os dados do formulario
function mostrarDadosDoFormulario() {

  //Crio uma variavel do tipo let e obtenho os valores dos campos do formulario
  let nome = document.getElementById('name').value;
  let dt_nascimento = document.getElementById('dt_nascimento').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('tel').value;
  let genero = document.querySelector('input[name="gender"]:checked').value;
  let pais = document.getElementById('pais').value;
  let cidade = document.getElementById('cidade').value;

  //Cria um objeto com os dados do formulario(uma struct para banco de dados)
  let dadosFormulario = {

    //'propriedade : valor'
    nome: nome,
    dt_nascimento: dt_nascimento,
    email: email,
    telefone: telefone,
    genero: genero,
    pais: pais,
    cidade: cidade
  };

  //Adiciona os dados do formulario ao array
  dadosArmazenados.push(dadosFormulario);

console.log(dadosArmazenados)

  //Verifica se atingimos 3 conjuntos de dados armazenados
  if (dadosArmazenados.length === 3) {
    mostrarDadosArmazenados();
  }
}

  //Funcao para mostrar os dados armazenado como um alerta
  function mostrarDadosArmazenados() {
    let mensagemExibicao = '';
    
    //Percorre os dados armazenados e monta a mensagem com os dados do formulario
    dadosArmazenados.forEach((dados, index) => {
      mensagemExibicao += `
  Dados ${index + 1}:
  Nome : ${dados.nome}
  Data de nascimento : ${dados.dt_nascimento}
  Email : ${dados.email}
  Telefone : ${dados.telefone}
  Gênero : ${dados.genero}
  País : ${dados.pais}
  Cidade : ${dados.cidade}
  `;
    });
    alert(mensagemExibicao);
  }







