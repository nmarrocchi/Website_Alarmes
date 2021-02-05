<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="style.css" rel="stylesheet">
        <title>Intéractions Salles</title>
    </head>
    <body>  

    <div class="Banniere"><h1>Intéraction capteurs salles </h1></div>

        <div class="Content">

            <div class="Bull">
                    <button type="button" id="Desactivate_Bull" onclick="toggleBull()">Désammorçer Bull</button>    
                    <button type="button" id="Activate_Bull" onclick="toggleBull()">Ammorçer Bull</button>  
            </div>

            <div class="IBM">
                    <button type="button" id="Desactivate_IBM" onclick="toggleIBM()">Désammorçer IBM</button>   
                    <button type="button" id="Activate_IBM" onclick="toggleIBM()">Ammorçer IBM</button> 
            </div>

            <div class="Apple">
                    <button type="button" id="Desactivate_Apple" onclick="toggleApple()">Désammorçer Apple</button> 
                    <button type="button" id="Activate_Apple" onclick="toggleApple()">Ammorçer Apple</button>   
            </div>
            
        </div>

    <script src="functions.js"></script>
    <script> Set_Default_Property() </script>
    
        
    </body>
</html>