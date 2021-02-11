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

        <div class="Content">
        <div class="all">
                <button type="button" id="Activate_all" onclick="toggleAll()">Tous Ammorçer</button> 
                <button type="button" id="Desactivate_all" onclick="toggleAll()">Tous Désammorçer</button>     
            </div>
            <div class="Bull">
                <button type="button" id="Activate_Bull" onclick="toggleBull()">Ammorçer Bull</button> 
                <button type="button" id="Desactivate_Bull" onclick="toggleBull()">Désammorçer Bull</button>     
            </div>
            <div class="IBM">
                <button type="button" id="Activate_IBM" onclick="toggleIBM()">Ammorçer IBM</button>
                <button type="button" id="Desactivate_IBM" onclick="toggleIBM()">Désammorçer IBM</button> 
            </div>
            <div class="Apple">
                <button type="button" id="Activate_Apple" onclick="toggleApple()">Ammorçer Apple</button>   
                <button type="button" id="Desactivate_Apple" onclick="toggleApple()">Désammorçer Apple</button>   
            </div>            
        </div>

        <div class="Content">

            <div class="Values_Bull">
                <table>
                    <th colspan="2">Capteurs en salle BULL</th>
                    <tr>
                        <td>Présence : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Tamper Présence : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>État Capteurs : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Continuité capteurs : </td>
                        <td>n/a</td>
                    </tr>
                </table>
            </div>

            <div class="Values_IBM">
                <table>
                <th colspan="2">Capteurs en salle IBM</th>
                    <tr>
                        <td>Présence : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Tamper Présence : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>État Capteurs : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Continuité capteurs : </td>
                        <td>n/a</td>
                    </tr>
                </table>
            </div>

            <div class="Values_Apple">
                <table>
                    <th colspan="2">Capteurs en salle Apple</th>
                    <tr>
                        <td>Présence : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Tamper Présence : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>État Capteurs : </td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Continuité capteurs : </td>
                        <td>n/a</td>
                    </tr>
                </table>
            </div>
        </div>

    <script src="functions.js"></script>
    <script> Set_Default_Property() </script>
    
        
    </body>
</html>