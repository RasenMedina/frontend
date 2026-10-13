
/*

import * as html from "./Html.js";
import { Gestio } from "./Gestio.js";

let gestio: Gestio = new Gestio();
let clientSeleccionat: number | undefined = undefined;

// Mostra un missatge a la pàgina.
function mostrarMissatge(missatge: string): void {
    html.escriureHTML("missatge", missatge);
}

// Actualitza la taula de clients.
function actualitzarClients(): void {
    html.escriureHTML("taulaClients", gestio.mostrarClients());
}

// Actualitza les factures del client seleccionat.
function actualitzarFactures(): void {
    if (clientSeleccionat !== undefined) {
        html.escriureHTML(
            "taulaFactures",
            gestio.mostrarFacturesClient(clientSeleccionat)
        );
    }
}

// Llegeix el formulari i afegeix un client.
function afegirClient(): void {
    try {
        let nif = html.llegirText("nif");
        let nom = html.llegirText("nom");
        let cognoms = html.llegirText("cognoms");

        let client = gestio.afegirClient(nif, nom, cognoms);

        actualitzarClients();
        mostrarMissatge("Client afegit amb ID " + client.id);
    } catch (error) {
        if (error instanceof Error) {
            mostrarMissatge(error.message);
        } else {
            mostrarMissatge(String(error));
        }
    }
}

// Selecciona un client pel seu identificador.
function seleccionarClient(): void {
    try {
        let id = html.llegirEnter("idClient");
        let client = gestio.buscarClient(id);

        if (client === undefined) {
            throw new Error("No s'ha trobat el client");
        }

        clientSeleccionat = client.id;
        actualitzarFactures();
        mostrarMissatge("Client seleccionat: " + client.nom);
    } catch (error) {
        if (error instanceof Error) {
            mostrarMissatge(error.message);
        } else {
            mostrarMissatge(String(error));
        }
    }
}

// Llegeix el formulari i afegeix una factura.
function afegirFactura(): void {
    try {
        if (clientSeleccionat === undefined) {
            throw new Error("Primer has de seleccionar un client");
        }

        let data = html.llegirText("data");
        let importFactura = html.llegirNumero("import");
        let pagada = html.llegirCheckbox("pagada");

        gestio.afegirFactura(
            clientSeleccionat,
            data,
            importFactura,
            pagada
        );

        actualitzarClients();
        actualitzarFactures();
        mostrarMissatge("Factura afegida correctament");
    } catch (error) {
        if (error instanceof Error) {
            mostrarMissatge(error.message);
        } else {
            mostrarMissatge(String(error));
        }
    }
}

// Configura els esdeveniments i mostra les dades inicials.
function main(): void {
    try {
        document.getElementById("botoClient")
            ?.addEventListener("click", afegirClient);

        document.getElementById("botoSeleccionar")
            ?.addEventListener("click", seleccionarClient);

        document.getElementById("botoFactura")
            ?.addEventListener("click", afegirFactura);

        actualitzarClients();
    } catch (error) {
        if (error instanceof Error) {
            mostrarMissatge(error.message);
        } else {
            mostrarMissatge(String(error));
        }
    }
}

main();

*/