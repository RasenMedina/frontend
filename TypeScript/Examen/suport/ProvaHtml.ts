// Escriu contingut HTML dins d'un element.
export function escriureHTML(id: string, contingut: string): void {
    let element: HTMLElement | null = document.getElementById(id);

    if (element !== null) {
        element.innerHTML = contingut;
    }
}

// Afegeix contingut HTML sense esborrar l'anterior.
export function afegirHTML(id: string, contingut: string): void {
    let element: HTMLElement | null = document.getElementById(id);

    if (element !== null) {
        element.innerHTML += contingut;
    }
}

// Llegeix el text d'un input.
export function llegirText(id: string): string {
    let element = document.getElementById(id) as HTMLInputElement | null;

    return element !== null ? element.value : "";
}

// Llegeix un número decimal d'un input.
export function llegirNumero(id: string): number {
    return parseFloat(llegirText(id));
}

// Llegeix un número enter d'un input.
export function llegirEnter(id: string): number {
    return parseInt(llegirText(id), 10);
}

// Llegeix si un checkbox està marcat.
export function llegirCheckbox(id: string): boolean {
    let element = document.getElementById(id) as HTMLInputElement | null;

    return element !== null ? element.checked : false;
}

// Llegeix el valor d'un select.
export function llegirSelect(id: string): string {
    let element = document.getElementById(id) as HTMLSelectElement | null;

    return element !== null ? element.value : "";
}

// Neteja el contingut d'un element HTML.
export function netejarHTML(id: string): void {
    escriureHTML(id, "");
}