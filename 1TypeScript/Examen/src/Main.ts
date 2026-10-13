import * as html from "./Html.js";

type Dada = {
    nom: string;
    quantitat: number;
};

let dades: Dada[] = [];

// Llegeix les dades dels inputs.
function llegirDades(): Dada {
    let nom: string = html.llegirText("nom");
    let quantitat: number = html.llegirNumero("quantitat");

    if (nom.trim() === "") {
        throw new Error("El nom no pot estar buit");
    }

    if (Number.isNaN(quantitat)) {
        throw new Error("La quantitat no és vàlida");
    }

    return {
        nom: nom,
        quantitat: quantitat
    };
}

// Mostra totes les dades a l'HTML.
function mostrarDades(): void {
    let missatge: string = "";

    for (let dada of dades) {
        missatge += dada.nom + ": " + dada.quantitat + "<br>";
    }

    html.escriureHTML("resultat", missatge);
}

// Afegeix una dada i controla els errors.
function afegirDada(): void {
    try {
        let novaDada: Dada = llegirDades();

        dades.push(novaDada);

        mostrarDades();
    } catch (error) {
        if (error instanceof Error) {
            html.escriureHTML("resultat", error.message);
        } else {
            html.escriureHTML("resultat", String(error));
        }
    }
}

// Funció principal.
function main(): void {
    try {
        let boto = document.getElementById("botoAfegir");

        if (boto === null) {
            throw new Error("No s'ha trobat el botó");
        }

        boto.addEventListener("click", afegirDada);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
    }
}

main();