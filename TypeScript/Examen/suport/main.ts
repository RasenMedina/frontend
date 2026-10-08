import * as html from "./Html.js";
import * as textos from "./Textos.js";
import * as funcions from "./Funcions.js";

// Processa les dades del formulari.
function processar(): void {
    let nom: string = html.llegirText("nom");
    let edat: number = html.llegirNumero("edat");

    let nomNormalitzat: string = textos.normalitzarText(nom);

    let missatge: string = funcions.crearMissatge(
        nomNormalitzat + " té " + edat + " anys"
    );

    html.escriureHTML("resultat", missatge);
}

// Configura els esdeveniments quan es carrega la pàgina.
function main(): void {
    let boto: HTMLElement | null = document.getElementById("boto");

    if (boto !== null) {
        boto.addEventListener("click", processar);
    }
}

main();