<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Pokémon</title>
</head>

<body>
    <div class="container">
        <h1>Trabalhando com <span> HTML </span>
            ,<span> CSS </span> e usando o javascript para fazer consultas online.</h1>
        <hr>
        <div class="imagem">
            <img src="img/pokemon-logo.png" alt="" srcset="">
        </div>
        <form action="js/script.js" class="group-form">
            <label for="">Nome ou numero do pokémon</label>
            <input type="text" id="name" placeholder="Exemplo Pikachu ou 25" required>
            <input type="submit" value="Buscar">
        </form>

        <div id="imgPokemon">
            
        </div>

        <div id="content">
            ...
        </div>
    </div>
    <script src="js/script.js"></script>
</body>

</html>