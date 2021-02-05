<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="style.css" rel="stylesheet">
        <title>Interactions Salles</title>
    </head>
    <body>  

    <div class="Banniere"><h1>Interaction capteurs salles </h1></div>

        <table class="Content">

            <tr>
                <td>    <button type="button" id="Desactivate_Bull" onclick="toggleBull()">Désammorçer Bull</button>    </td>
                <td>    <button type="button" id="Activate_Bull" onclick="toggleBull()">Ammorçer Bull</button>  </td>
            </tr>

            <tr>
                <td>    <button type="button" id="Desactivate_IBM" onclick="toggleIBM()">Désammorçer IBM</button>   </td>
                <td>    <button type="button" id="Activate_IBM" onclick="toggleIBM()">Ammorçer IBM</button> </td>
            </tr>

            <tr>
                <td>    <button type="button" id="Desactivate_Apple" onclick="toggleApple()">Désammorçer Apple</button> </td>
                <td>    <button type="button" id="Activate_Apple" onclick="toggleApple()">Ammorçer Apple</button>   </td>
            </tr>
            
        </table>

    <script src="functions.js"></script>
    <script> Set_Default_Property() </script>
    
        
    </body>
</html>