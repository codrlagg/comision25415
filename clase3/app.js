let entrada = prompt("Adivina un número entre 0 y 50");
while (entrada != 25) {
    console.log(entrada);
    alert("El número " + entrada + "  no es el número mágico");
    if(entrada < 25){
        alert("Intenta con un número más alto");
    }
    else if(entrada > 25){
        alert("Intenta con un número más bajo");
    }
    entrada = prompt ("Intenta con otro número entre 0 y 100");
}
alert("¡Felicidades encontraste el número mágico!");