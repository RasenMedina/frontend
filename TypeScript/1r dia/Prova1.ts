// Introducció a TypeScript - Dimarts 15-9-26

// Definim una variable de tipus string amb el missatge
let missatge: string = "Jordi macu què tal? Trempat";

// Mostrem el missatge per la consola del navegador (F12)
console.log(missatge);

// Mostrem una finestra emergent tipus alerta
alert(missatge);

// Busquem l'element HTML que té l'id "missatge"
// Usem una comprovació perquè TypeScript sàpiga segur que l'element existeix
let m = document.getElementById("missatge");

if (m) {
    // Si l'element existeix, hi injectem el text dins del HTML
    m.innerHTML = missatge;
}
