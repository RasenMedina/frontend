import type { Persona } from "./Types.js";

// Crea un objecte Persona.
export function novaPersona(id: number, nom: string, edat: number): Persona {
    return { id, nom, edat };
}

// Modifica l'edat d'una persona.
export function canviarEdat(persona: Persona, edat: number): void {
    persona.edat = edat;
}

// Crea una còpia superficial d'una persona.
export function copiarPersona(persona: Persona): Persona {
    return { ...persona };
}

// Crea una còpia profunda de dades compatibles amb JSON.
export function clonarObjecte<T>(objecte: T): T {
    return JSON.parse(JSON.stringify(objecte)) as T;
}

// Recorre les propietats d'un objecte.
export function mostrarPropietats(objecte: object): string {
    let resultat: string = "";

    for (let clau in objecte) {
        let valor: unknown = Reflect.get(objecte, clau);
        resultat += clau + ": " + String(valor) + "<br>";
    }

    return resultat;
}

// Elimina una propietat opcional.
export function eliminarTelefon(persona: Persona): void {
    delete persona.telefon;
}