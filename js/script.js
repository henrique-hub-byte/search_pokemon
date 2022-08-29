/* query na tag form  */
var formulario = document.querySelector('form')

/* analisando */
formulario.addEventListener('submit', function(e){
    console.log("oi");
    /* bloqueia o refresh da pagina */
    e.preventDefault();
    /* url da pesquisa */
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    /* valor do input name */
    let nome = document.getElementById('name');

    urlForm = urlForm + this.name.value;

    /* transforma os valores em minusculo */
    urlForm = urlForm.toLocaleLowerCase();

    let resposta = document.getElementById('content')

    let imagem = document.getElementById('imgPokemon')
    
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            html = 'Nome: ' + maiuscula(data.name)  + '<br>';
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)  + '<br>';
            resposta.innerHTML = html;
            imagem.innerHTML = "<img src='"+ data.sprites.front_default + "'><img src='"+ data.sprites.back_default + "'>"
        })
        .catch(function(err){
            if(err = 'SystaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokemon não encontrado! 🤡 ';
            }else{
                html = 'Erro' + err;
            }
            resposta.innerHTML = html;
        })

});

function maiuscula(valor){
    return valor[0].toUpperCase() + valor.substr(1)
}