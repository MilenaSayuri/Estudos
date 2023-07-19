var teste = '1';

function mostrarDadosDoFormulario() {
    let oi = '2';

    console.log(teste)
    console.log(oi)
    // Obtém os valores dos campos do formulário
    let nome = document.getElementById('name').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('tel').value;
    let genero = document.querySelector('input[name="gender"]:checked').value;
    let pais = document.getElementById('pais').value;
    let cidade = document.getElementById('cidade').value;

    debugger

    // Monta a mensagem a ser exibida com os dados do formulário
    const mensagemExibicao = `
      Nome: ${nome}
      Idade: ${idade}
      Email: ${email}
      Telefone: ${telefone}
      Gênero: ${genero}
      País: ${pais}
      Cidade: ${cidade}
    `;

    // Exibe a mensagem em uma caixa de notificação
    alert(mensagemExibicao);
}

window.onload = function () {
    console.log(teste)
    console.log(oi)
}