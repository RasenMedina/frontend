import { Factura } from "./Factura.js";

export class Client {
    static #seguentId: number = 10;

    readonly id: number;
    readonly nif: string;
    #nom: string;
    #cognoms: string;
    #factures: Factura[];

    constructor(nif: string, nom: string, cognoms: string) {
        if (!/^\d{8}[A-Za-z]$/.test(nif)) {
            throw new Error("El format del NIF no és correcte");
        }

        const lletres = "TRWAGMYFPDXBNJZSQVHLCKE";
        const numero = parseInt(nif.substring(0, 8), 10);
        const lletra = lletres.charAt(numero % 23);

        if (nif.charAt(8).toUpperCase() !== lletra) {
            throw new Error("La lletra del NIF no és correcta");
        }

        if (nom.trim() === "" || cognoms.trim() === "") {
            throw new Error("Cal introduir nom i cognoms");
        }

        if (Client.#seguentId > 99) {
            throw new Error("S'ha arribat al límit de clients");
        }

        this.id = Client.#seguentId++;
        this.nif = nif.toUpperCase();
        this.#nom = nom;
        this.#cognoms = cognoms;
        this.#factures = [];
    }

    // Retorna el nom.
    get nom(): string {
        return this.#nom;
    }

    // Modifica el nom.
    set nom(valor: string) {
        if (valor.trim() === "") {
            throw new Error("El nom no pot estar buit");
        }
        this.#nom = valor;
    }

    // Retorna els cognoms.
    get cognoms(): string {
        return this.#cognoms;
    }

    // Afegeix una factura al client.
    afegirFactura(factura: Factura): void {
        this.#factures.push(factura);
    }

    // Retorna les factures del client.
    get factures(): Factura[] {
        return [...this.#factures];
    }

    // Calcula l'import total de les factures.
    calcularTotal(): number {
        let total = 0;

        for (let factura of this.#factures) {
            total += factura.import;
        }

        return total;
    }

    // Calcula l'import pendent.
    calcularPendent(): number {
        let total = 0;

        for (let factura of this.#factures) {
            if (!factura.pagada) {
                total += factura.import;
            }
        }

        return total;
    }

    // Genera les files HTML de les factures.
    mostrarFactures(): string {
        let resultat = "";

        for (let factura of this.#factures) {
            resultat += "<tr>";
            resultat += "<td>" + factura.id + "</td>";
            resultat += "<td>" + factura.data + "</td>";
            resultat += "<td>" + factura.import.toFixed(2) + " €</td>";
            resultat += "<td>" + (factura.pagada ? "Sí" : "No") + "</td>";
            resultat += "</tr>";
        }

        return resultat;
    }
}