export class Factura {
    static #seguentId: number = 100;

    readonly id: number;
    readonly data: string;
    readonly import: number;
    #pagada: boolean;

    constructor(data: string, importFactura: number, pagada: boolean) {
        if (data.trim() === "") {
            throw new Error("Cal introduir una data");
        }

        if (!Number.isFinite(importFactura) || importFactura <= 0) {
            throw new Error("L'import ha de ser positiu");
        }

        if (Factura.#seguentId > 999) {
            throw new Error("S'ha arribat al límit de factures");
        }

        this.id = Factura.#seguentId++;
        this.data = data;
        this.import = importFactura;
        this.#pagada = pagada;
    }

    // Retorna si la factura està pagada.
    get pagada(): boolean {
        return this.#pagada;
    }

    // Modifica l'estat de pagament.
    set pagada(valor: boolean) {
        this.#pagada = valor;
    }

    // Retorna una descripció de la factura.
    mostrar(): string {
        return this.id + " - " + this.data + " - " +
            this.import.toFixed(2) + " €";
    }
}