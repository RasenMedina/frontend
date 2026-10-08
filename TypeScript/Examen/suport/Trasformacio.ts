// Substitueix vocals accentuades i caràcters especials.
export function normalitzarText(text: string): string {
    let originals: string = "àáâäèéêëìíîïòóôöùúûüñç";
    let substituts: string = "aaaaeeeeiiiioooouuuunc";

    let resultat: string = "";

    for (let i: number = 0; i < text.length; i++) {
        let caracter: string = text.charAt(i);
        let posicio: number = originals.indexOf(caracter.toLowerCase());

        if (posicio !== -1) {
            let nou: string = substituts.charAt(posicio);

            resultat += caracter === caracter.toUpperCase()
                ? nou.toUpperCase()
                : nou;
        } else {
            resultat += caracter;
        }
    }

    return resultat;
}

// Comprova si un text conté un altre text ignorant accents i majúscules.
export function conteText(text: string, cerca: string): boolean {
    return normalitzarText(text).toLowerCase()
        .includes(normalitzarText(cerca).toLowerCase());
}

// Compta les aparicions d'un caràcter.
export function comptarCaracter(text: string, caracter: string): number {
    let total: number = 0;

    for (let i: number = 0; i < text.length; i++) {
        if (text.charAt(i) === caracter) {
            total++;
        }
    }

    return total;
}