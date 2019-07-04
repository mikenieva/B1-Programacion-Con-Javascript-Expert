      // Creamos una función que compare resultados entre un jugador y otro, a partir de su elección de piedra, papel o tijera
      var jugar = function(choice1,choice2) {
        if (choice1 === choice2) {
            return "Es un empate!";
        }
        if (choice1 === "piedra") {
            if (choice2 === "tijeras") {
                // Piedra gana
                return "Tú ganas!";
            } else {
                // Papel gana
                return "Tú pierdes! Inténtalo nuevamente.";
            }
        }
        if (choice1 === "papel") {
            if (choice2 === "piedra") {
                // Papel gana
                return "Tú ganas!";
            } else {
                // Tijeras gana
                return "Tú pierdes! Inténtalo nuevamente.";
            }
        }
        if (choice1 === "tijeras") {
            if (choice2 === "piedra") {
                // Piedra gana
                return "Tú pierdes! Inténtalo nuevamente.";
            } else {
                // Tijeras gana
                return "Tú ganas!";
            }
        }
    };

    var userChoice = "piedra"
    
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "piedra";
    } else if(computerChoice <= 0.67) {
        computerChoice = "papel";
    } else {
        computerChoice = "tijeras";
    }

    // Expresamos las elecciones de cada quién
    console.log("Tú elegiste:", userChoice);
    console.log("La computadora eligió:", computerChoice);

    // Invocamos la función para jugar
    var results = jugar(userChoice,computerChoice);

    // Expresamos los resultados
    console.log(results)