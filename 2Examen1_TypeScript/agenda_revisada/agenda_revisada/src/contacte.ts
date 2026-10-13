// Categories permeses per a un contacte.
export type TCategoria = "familia" | "amics" | "feina";

// Estructura de les dades que arriben de dades.ts.
export type TDadesContacte = {
    nom: string;
    telefon: string;
    email: string;
    categoria: TCategoria;
};

export class Contacte {
    #nom: string;
    #telefon: string;
    #email: string;
    #categoria: TCategoria;

    constructor(nom: string, telefon: string, email: string, categoria: TCategoria) {
        // Validem abans de guardar els valors.
        Contacte.validar(nom, telefon, email, categoria);
        this.#nom = nom.trim();
        this.#telefon = telefon.trim();
        this.#email = email.trim();
        this.#categoria = categoria;
    }

    // Validacions compartides pel constructor i el mètode modificar.
    private static validar(nom: string, telefon: string, email: string, categoria: TCategoria): void {
        // Lletres Unicode: accepta accents, apòstrofs, guionets i espais.
        if (!/^[\p{L}][\p{L} '\-]{1,29}$/u.test(nom.trim())) {
            throw new Error("El nom ha de tenir entre 2 i 30 caràcters vàlids");
        }
        if (!/^[6789]\d{8}$/.test(telefon.trim())) {
            throw new Error("El telèfon ha de tenir 9 dígits i començar per 6, 7, 8 o 9");
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            throw new Error("El correu electrònic no és vàlid");
        }
        if (!["familia", "amics", "feina"].includes(categoria)) {
            throw new Error("La categoria no és vàlida");
        }
    }

    get nom(): string { return this.#nom; }
    get telefon(): string { return this.#telefon; }
    get email(): string { return this.#email; }
    get categoria(): TCategoria { return this.#categoria; }

    // El telèfon és la clau del Map: no el modifiquem aquí.
    modificar(nom: string, email: string, categoria: TCategoria): void {
        Contacte.validar(nom, this.#telefon, email, categoria);
        this.#nom = nom.trim();
        this.#email = email.trim();
        this.#categoria = categoria;
    }

    toString(): string {
        return `${this.#nom} · ${this.#telefon} · ${this.#email} (${this.#categoria})`;
    }
}
