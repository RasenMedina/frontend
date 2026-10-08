// Classe base amb atributs, constructor i mètodes.
export class Persona {
    readonly id: number;
    #nom: string;
    #edat: number;
    protected tipus: string;

    static totalPersones: number = 0;

    constructor(id: number, nom: string, edat: number) {
        this.id = id;
        this.#nom = nom;
        this.#edat = edat;
        this.tipus = "Persona";

        Persona.totalPersones++;
    }

    // Retorna el nom.
    get nom(): string {
        return this.#nom;
    }

    // Modifica el nom validant-lo.
    set nom(valor: string) {
        if (valor.trim() === "") {
            throw new Error("El nom no pot estar buit");
        }

        this.#nom = valor;
    }

    // Retorna l'edat.
    get edat(): number {
        return this.#edat;
    }

    // Modifica l'edat validant-la.
    set edat(valor: number) {
        if (!Number.isFinite(valor) || valor < 0) {
            throw new Error("L'edat no és vàlida");
        }

        this.#edat = valor;
    }

    // Retorna una descripció de la persona.
    mostrar(): string {
        return this.id + " - " + this.#nom + " (" + this.#edat + " anys)";
    }

    // Comprova si és major d'edat.
    esMajorEdat(): boolean {
        return this.#edat >= 18;
    }

    // Retorna el tipus de persona.
    getTipus(): string {
        return this.tipus;
    }

    // Retorna el nombre de persones creades.
    static obtenirTotal(): number {
        return Persona.totalPersones;
    }
}


// Classe filla que hereta de Persona.
export class Alumne extends Persona {
    #curs: number;
    #notes: number[];

    constructor(id: number, nom: string, edat: number, curs: number) {
        super(id, nom, edat);

        this.#curs = curs;
        this.#notes = [];
        this.tipus = "Alumne";
    }

    // Retorna el curs.
    get curs(): number {
        return this.#curs;
    }

    // Modifica el curs.
    set curs(valor: number) {
        if (valor !== 1 && valor !== 2) {
            throw new Error("El curs ha de ser 1 o 2");
        }

        this.#curs = valor;
    }

    // Afegeix una nota.
    afegirNota(nota: number): void {
        if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
            throw new Error("La nota ha d'estar entre 0 i 10");
        }

        this.#notes.push(nota);
    }

    // Retorna una còpia de les notes.
    get notes(): number[] {
        return [...this.#notes];
    }

    // Calcula la mitjana de les notes.
    calcularMitjana(): number {
        if (this.#notes.length === 0) {
            return 0;
        }

        let total: number = 0;

        for (let nota of this.#notes) {
            total += nota;
        }

        return total / this.#notes.length;
    }

    // Sobreescriu el mètode mostrar de Persona.
    override mostrar(): string {
        return super.mostrar() +
            " - Curs: " + this.#curs +
            " - Mitjana: " + this.calcularMitjana().toFixed(1);
    }
}

/*
Conceptes que has de reconèixer
Sintaxi	Significat
class Persona	Defineix una classe
new Persona(...)	Crea un objecte
constructor(...)	Inicialitza l'objecte
this	Fa referència a l'objecte actual
#nom	Atribut privat de JavaScript
protected tipus	Accessible des de la classe i les subclasses en TypeScript
readonly id	No es pot reassignar després de la inicialització
get nom()	Permet llegir persona.nom
set nom(...)	Permet assignar persona.nom = "Anna"
extends Persona	Herència
super(...)	Crida el constructor de la classe pare
super.mostrar()	Crida un mètode de la classe pare
override	Indica que sobreescrivim un mètode heretat
static	Pertany a la classe, no a un objecte concret
Un detall especialment important: #nom és un camp privat real de JavaScript, mentre que protected és un modificador de TypeScript. Una subclasse no pot accedir directament a #nom, però sí que pot utilitzar el getter nom.

import * as classes from "./Classes.js";

let alumne: classes.Alumne = new classes.Alumne(
    1,
    "Anna",
    19,
    2
);

alumne.afegirNota(8);
alumne.afegirNota(7);

console.log(alumne.nom);
console.log(alumne.calcularMitjana());
console.log(alumne.mostrar());

alumne.nom = "Laura";

console.log(classes.Persona.obtenirTotal());
*/