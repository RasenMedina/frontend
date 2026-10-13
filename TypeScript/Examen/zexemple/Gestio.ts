import { Client } from "./Client.js";
import { Factura } from "./Factura.js";

export class Gestio {
    #clients: Client[];

    constructor() {
        this.#clients = [];
    }

    // Afegeix un client comprovant que el NIF no existeixi.
    afegirClient(nif: string, nom: string, cognoms: string): Client {
        let existent = this.#clients.find(
            (client) => client.nif === nif.toUpperCase()
        );

        if (existent !== undefined) {
            throw new Error("Ja existeix un client amb aquest NIF");
        }

        let client = new Client(nif, nom, cognoms);
        this.#clients.push(client);

        return client;
    }

    // Busca un client pel seu identificador.
    buscarClient(id: number): Client | undefined {
        return this.#clients.find((client) => client.id === id);
    }

    // Afegeix una factura a un client.
    afegirFactura(
        idClient: number,
        data: string,
        importFactura: number,
        pagada: boolean
    ): void {
        let client = this.buscarClient(idClient);

        if (client === undefined) {
            throw new Error("No existeix aquest client");
        }

        let factura = new Factura(data, importFactura, pagada);
        client.afegirFactura(factura);
    }

    // Genera una taula HTML amb tots els clients.
    mostrarClients(): string {
        let resultat = "<table border='1'>";

        resultat += "<tr>";
        resultat += "<th>Id</th><th>NIF</th><th>Cognoms, Nom</th>";
        resultat += "<th>Total</th><th>Pendent</th>";
        resultat += "</tr>";

        for (let client of this.#clients) {
            resultat += "<tr>";
            resultat += "<td>" + client.id + "</td>";
            resultat += "<td>" + client.nif + "</td>";
            resultat += "<td>" + client.cognoms + ", " + client.nom + "</td>";
            resultat += "<td>" + client.calcularTotal().toFixed(2) + " €</td>";
            resultat += "<td>" + client.calcularPendent().toFixed(2) + " €</td>";
            resultat += "</tr>";
        }

        resultat += "</table>";
        return resultat;
    }

    // Genera una taula HTML amb les factures d'un client.
    mostrarFacturesClient(idClient: number): string {
        let client = this.buscarClient(idClient);

        if (client === undefined) {
            throw new Error("No existeix aquest client");
        }

        let resultat = "<table border='1'>";
        resultat += "<tr><th>Id</th><th>Data</th><th>Total</th><th>Pagada</th></tr>";
        resultat += client.mostrarFactures();
        resultat += "</table>";

        return resultat;
    }
}

/*
Gestio
  │
  └── clients: Client[]
        │
        └── Client
              │
              └── factures: Factura[]
                    │
                    └── Factura

Alumne[] → Alumne → Modul[] → Modul
*/