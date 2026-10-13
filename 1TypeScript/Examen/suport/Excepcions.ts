// Valida que un número sigui positiu.
export function validarPositiu(numero: number): void {
    if (!Number.isFinite(numero) || numero < 0) {
        throw new Error("El número ha de ser positiu");
    }
}

// Divideix dos números i controla la divisió per zero.
export function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No es pot dividir entre zero");
    }

    return a / b;
}

// Valida que un text no estigui buit.
export function validarText(text: string): void {
    if (text.trim() === "") {
        throw new Error("El text no pot estar buit");
    }
}

// Converteix qualsevol error capturat en un missatge.
export function missatgeError(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    return String(error);
}

// Executa una divisió capturant possibles errors.
export function provarDivisio(a: number, b: number): string {
    try {
        let resultat: number = dividir(a, b);

        return "Resultat: " + resultat;
    } catch (error) {
        return "Error: " + missatgeError(error);
    }
}

/*
El patró que has de memoritzar és:
try {
    let resultat: number = 10 / 2;
    console.log(resultat);
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(String(error));
    }
}


Però fixa't que una divisió numèrica normal de JavaScript entre zero no llança una excepció: retorna Infinity o NaN segons els operands. Per això, quan vulguis tractar-la com un error, hauràs de comprovar-la i fer throw new Error(...), com hem fet a dividir().

*/