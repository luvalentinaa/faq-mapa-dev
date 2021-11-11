//****Criando a  função para click na pergunta****

// buscar os itens da tela
const itensPerguntasERespostas = document.querySelectorAll('.item')

//endender que o item foi clicado
itensPerguntasERespostas.forEach(function (item) {
  item.addEventListener('click', function () {
    //verificar se apergunta clicada está ativa
    const estaAtiva = item.classList.contains('ativa')
    //se a pergunta  não está ativa

    //fechar todas primeiro
    itensPerguntasERespostas.forEach(function (item) {
      item.classList.remove('ativa')
    })
    if (!estaAtiva) {
      //abrir a atual
      item.classList.add('ativa')
    } else {
      item.classList.remove('ativa')
    }
    //abrir a resposta atual, MAS MAS EU PRECISSO     FECHAR TODAS
    //SE A PERGUNTA ESTIVER ATIVA
    //DESATIVAR (REMOVER A CLASSE ATIVA)
  })
})
