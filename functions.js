let stateAll = false,
    stateBull = false,
    stateIBM = false,
    stateApple = false;

// -- Paramètres des boutons par défaut ----------------------------------------------------
function Set_Default_Property() {

    // -- Propriétée des boutons ( enable / disable )

    document.getElementById("Desactivate_all").setAttribute("disabled", "disabled");
    document.getElementById("Activate_all").setAttribute("enabled", "enabled");

    document.getElementById("Desactivate_Bull").setAttribute("disabled", "disabled");
    document.getElementById("Activate_Bull").setAttribute("enabled", "enabled");

    document.getElementById("Desactivate_IBM").setAttribute("disabled", "disabled");
    document.getElementById("Activate_IBM").setAttribute("enabled", "enabled");

    document.getElementById("Desactivate_Apple").setAttribute("disabled", "disabled");
    document.getElementById("Activate_Apple").setAttribute("enabled", "enabled");


        // -- Couleur des boutons ( Texte / Background )

    document.getElementById("Desactivate_all").style.backgroundColor = "#C4C4C4";
    document.getElementById("Activate_all").style.backgroundColor = "white";
    document.getElementById("Desactivate_all").style.color = "grey";
    document.getElementById("Activate_all").style.color = "black";

    document.getElementById("Desactivate_Bull").style.backgroundColor = "#C4C4C4";
    document.getElementById("Activate_Bull").style.backgroundColor = "white";
    document.getElementById("Desactivate_Bull").style.color = "grey";
    document.getElementById("Activate_Bull").style.color = "black";

    document.getElementById("Desactivate_IBM").style.backgroundColor = "#C4C4C4";
    document.getElementById("Activate_IBM").style.backgroundColor = "white";
    document.getElementById("Desactivate_IBM").style.color = "grey";
    document.getElementById("Activate_IBM").style.color = "black";

    document.getElementById("Desactivate_Apple").style.backgroundColor = "#C4C4C4";
    document.getElementById("Activate_Apple").style.backgroundColor = "white";
    document.getElementById("Desactivate_Apple").style.color = "grey";
    document.getElementById("Activate_Apple").style.color = "black";

}


// -- Fonctions toggle pour switch de bouton enable et disable

// -- Toutes les Salles

function toggleAll() {
    document.getElementById("Desactivate_all").toggleAttribute("disabled");
    document.getElementById("Activate_all").toggleAttribute("disabled");

    stateAll = !stateAll

    console.log("Etat All :", stateAll);

    if (stateAll == true) {
        document.getElementById("Desactivate_all").style.backgroundColor = "white";
        document.getElementById("Activate_all").style.backgroundColor = "#C4C4C4";
        document.getElementById("Desactivate_all").style.color = "black";
        document.getElementById("Activate_all").style.color = "grey";

        document.getElementById("Desactivate_Bull").style.backgroundColor = "white";
        document.getElementById("Activate_Bull").style.backgroundColor = "#C4C4C4";
        document.getElementById("Desactivate_Bull").style.color = "black";
        document.getElementById("Activate_Bull").style.color = "grey";

        document.getElementById("Desactivate_IBM").style.backgroundColor = "white";
        document.getElementById("Activate_IBM").style.backgroundColor = "#C4C4C4";
        document.getElementById("Desactivate_IBM").style.color = "black";
        document.getElementById("Activate_IBM").style.color = "grey";

        document.getElementById("Desactivate_Apple").style.backgroundColor = "white";
        document.getElementById("Activate_Apple").style.backgroundColor = "#C4C4C4";
        document.getElementById("Desactivate_Apple").style.color = "blgreyack";
        document.getElementById("Activate_Apple").style.color = "grey";

        
    } else if (stateAll == false) {
        document.getElementById("Desactivate_all").style.backgroundColor = "#C4C4C4";
        document.getElementById("Activate_all").style.backgroundColor = "white";
        document.getElementById("Desactivate_all").style.color = "grey";
        document.getElementById("Activate_all").style.color = "black";

        document.getElementById("Desactivate_Bull").style.backgroundColor = "#C4C4C4";
        document.getElementById("Activate_Bull").style.backgroundColor = "white";
        document.getElementById("Desactivate_Bull").style.color = "grey";
        document.getElementById("Activate_Bull").style.color = "black";

        document.getElementById("Desactivate_IBM").style.backgroundColor = "#C4C4C4";
        document.getElementById("Activate_IBM").style.backgroundColor = "white";
        document.getElementById("Desactivate_IBM").style.color = "grey";
        document.getElementById("Activate_IBM").style.color = "black";

        document.getElementById("Desactivate_Apple").style.backgroundColor = "#C4C4C4";
        document.getElementById("Activate_Apple").style.backgroundColor = "white";
        document.getElementById("Desactivate_Apple").style.color = "grey";
        document.getElementById("Activate_Apple").style.color = "black";
    }

}

// -- Salle Bull

function toggleBull() {
    document.getElementById("Desactivate_Bull").toggleAttribute("disabled");
    document.getElementById("Activate_Bull").toggleAttribute("disabled");

    stateBull = !stateBull

    console.log("Etat bull :", stateBull);

    if (stateBull == true) {
        document.getElementById("Desactivate_Bull").style.backgroundColor = "white";
        document.getElementById("Activate_Bull").style.backgroundColor = "#C4C4C4";
        document.getElementById("Desactivate_Bull").style.color = "black";
        document.getElementById("Activate_Bull").style.color = "grey";
    } else if (stateBull == false) {
        document.getElementById("Desactivate_Bull").style.backgroundColor = "#C4C4C4";
        document.getElementById("Activate_Bull").style.backgroundColor = "white";
        document.getElementById("Desactivate_Bull").style.color = "grey";
        document.getElementById("Activate_Bull").style.color = "black";
    }

}

// -- Salle IBM

function toggleIBM() {
    document.getElementById("Desactivate_IBM").toggleAttribute("disabled");
    document.getElementById("Activate_IBM").toggleAttribute("disabled");

    stateIBM = !stateIBM;

    console.log("Etat IBM :", stateIBM);

    if (stateIBM == true) {
        document.getElementById("Desactivate_IBM").style.backgroundColor = "white";
        document.getElementById("Activate_IBM").style.backgroundColor = "#C4C4C4";
        document.getElementById("Desactivate_IBM").style.color = "black";
        document.getElementById("Activate_IBM").style.color = "grey";
    } else if (stateIBM == false) {
        document.getElementById("Desactivate_IBM").style.backgroundColor = "#C4C4C4";
        document.getElementById("Activate_IBM").style.backgroundColor = "white";
        document.getElementById("Desactivate_IBM").style.color = "grey";
        document.getElementById("Activate_IBM").style.color = "black";
    }
    grey

}

// -- Salle Apple

function toggleApple() {
    document.getElementById("Desactivate_Apple").toggleAttribute("disabled");
    document.getElementById("Activate_Apple").toggleAttribute("disabled");

    stateApple = !stateApple;

    console.log("Etat Apple :", stateApple);

    if (stateApple == true) {
        document.getElementById("Desactivate_Apple").style.backgroundColor = "white";
        document.getElementById("Activate_Apple").style.backgroundColor = "#C4C4C4";
        document.getElementById("Desactivate_Apple").style.color = "blgreyack";
        document.getElementById("Activate_Apple").style.color = "grey";
    } else if (stateApple == false) {
        document.getElementById("Desactivate_Apple").style.backgroundColor = "#C4C4C4";
        document.getElementById("Activate_Apple").style.backgroundColor = "white";
        document.getElementById("Desactivate_Apple").style.color = "grey";
        document.getElementById("Activate_Apple").style.color = "black";
    }

}