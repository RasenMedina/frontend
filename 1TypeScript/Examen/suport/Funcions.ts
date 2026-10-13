// Retorna un missatge amb un prefix opcional.
export function crearMissatge(text: string, prefix: string = "Informació"): string {
    return prefix + ": " + text;
}

// Retorna un nom complet amb segon cognom opcional.
export function nomComplet(nom: string,cognom1: string,cognom2?: string): string {
    return nom + " " + cognom1 + (cognom2 ? " " + cognom2 : "");
}

// Comprova si un número està dins d'un rang.
export function dinsRang(valor: number,minim: number = 0,maxim: number = 100): boolean {
    return valor >= minim && valor <= maxim;
}

// Calcula la mitjana d'un array de números.
export function mitjana(numeros: number[]): number {
    if (numeros.length === 0) {
        return 0;
    }

    let suma: number = 0;

    for (let numero of numeros) {
        suma += numero;
    }

    return suma / numeros.length;
}

// Arrodoneix un número al nombre de decimals indicat.
export function arrodonir(numero: number, decimals: number = 2): number {
    let factor: number = Math.pow(10, decimals);

    return Math.round(numero * factor) / factor;
}