// Crea un Map amb dades inicials.
export function crearMap(): Map<number, string> {
    let dades: Map<number, string> = new Map();

    dades.set(1, "Anna");
    dades.set(2, "Marc");

    return dades;
}

// Afegeix o modifica una entrada.
export function guardarMap(
    dades: Map<number, string>,
    clau: number,
    valor: string
): void {
    dades.set(clau, valor);
}

// Busca un valor per la clau.
export function buscarMap(
    dades: Map<number, string>,
    clau: number
): string | undefined {
    return dades.get(clau);
}

// Comprova si existeix una clau.
export function existeixClau(
    dades: Map<number, string>,
    clau: number
): boolean {
    return dades.has(clau);
}

// Elimina una entrada.
export function eliminarMap(
    dades: Map<number, string>,
    clau: number
): boolean {
    return dades.delete(clau);
}

// Retorna el nombre d'entrades.
export function midaMap(dades: Map<number, string>): number {
    return dades.size;
}

// Buida el Map.
export function buidarMap(dades: Map<number, string>): void {
    dades.clear();
}

// Recorre totes les entrades del Map.
export function mostrarMap(dades: Map<number, string>): string {
    let resultat: string = "";

    for (let [clau, valor] of dades) {
        resultat += clau + ": " + valor + "<br>";
    }

    return resultat;
}

// Recorre només les claus del Map.
export function mostrarClaus(dades: Map<number, string>): string {
    let resultat: string = "";

    for (let clau of dades.keys()) {
        resultat += clau + "<br>";
    }

    return resultat;
}

// Recorre només els valors del Map.
export function mostrarValors(dades: Map<number, string>): string {
    let resultat: string = "";

    for (let valor of dades.values()) {
        resultat += valor + "<br>";
    }

    return resultat;
}

// Converteix un Map en un array de parelles.
export function mapAArray(
    dades: Map<number, string>
): [number, string][] {
    return Array.from(dades);
}

// Crea un Map a partir d'un array de parelles.
export function arrayAMap(
    dades: [number, string][]
): Map<number, string> {
    return new Map(dades);
}

// Crea un Set amb dades inicials.
export function crearSet(): Set<string> {
    return new Set(["DAW", "ASIX", "DAW"]);
}

// Afegeix un element al Set.
export function afegirSet(
    dades: Set<string>,
    valor: string
): void {
    dades.add(valor);
}

// Comprova si un element existeix.
export function existeixSet(
    dades: Set<string>,
    valor: string
): boolean {
    return dades.has(valor);
}

// Elimina un element.
export function eliminarSet(
    dades: Set<string>,
    valor: string
): boolean {
    return dades.delete(valor);
}

// Retorna el nombre d'elements.
export function midaSet(dades: Set<string>): number {
    return dades.size;
}

// Buida el Set.
export function buidarSet(dades: Set<string>): void {
    dades.clear();
}

// Recorre tots els elements.
export function mostrarSet(dades: Set<string>): string {
    let resultat: string = "";

    for (let valor of dades) {
        resultat += valor + "<br>";
    }

    return resultat;
}

// Converteix un Set en un array.
export function setAArray(dades: Set<string>): string[] {
    return [...dades];
}

// Elimina els duplicats d'un array.
export function eliminarDuplicats(dades: string[]): string[] {
    return [...new Set(dades)];
}

/*
Diferència fonamental entre Map i Set
Un Map guarda parelles:
let alumnes: Map<number, string> = new Map();

alumnes.set(1, "Anna");
alumnes.set(2, "Marc");


Un Set guarda valors únics:
let moduls: Set<string> = new Set();

moduls.add("M02");
moduls.add("M03");
moduls.add("M02");


El Set només contindrà dos elements.

*/