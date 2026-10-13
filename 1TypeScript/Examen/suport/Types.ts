// Tipus d'objecte amb propietats opcionals i readonly.
export type Persona = {
    readonly id: number;
    nom: string;
    edat: number;
    telefon?: string;
};

// Tipus compost amb un array d'objectes.
export type Alumne = Persona & {
    curs: 1 | 2;
    notes: number[];
};

// Tipus amb un conjunt de valors permesos.
export type Estat = "pendent" | "actiu" | "finalitzat";

// Crea una persona.
export function crearPersona(id: number,nom: string,edat: number): Persona {
    return { id, nom, edat };
}