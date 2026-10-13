// Afegeix un element al final.
export function afegir<T>(array: T[], element: T): void {
    array.push(element);
}

// Elimina l'últim element.
export function eliminarUltim<T>(array: T[]): T | undefined {
    return array.pop();
}

// Uneix dos arrays sense modificar-los.
export function unir<T>(a: T[], b: T[]): T[] {
    return a.concat(b);
}

// Crea una còpia superficial de l'array.
export function copiar<T>(array: T[]): T[] {
    return array.slice();
}

// Clona dades senzilles compatibles amb JSON.
export function clonarJSON<T>(dades: T): T {
    return JSON.parse(JSON.stringify(dades)) as T;
}

// Retorna els elements que compleixen una condició.
export function filtrar<T>(array: T[],condicio: (element: T) => boolean): T[] {
    return array.filter(condicio);
}

// Retorna el primer element que compleix una condició.
export function buscar<T>( array: T[],condicio: (element: T) => boolean): T | undefined {
    return array.find(condicio);
}

// Comprova si algun element compleix una condició.
export function existeix<T>( array: T[],condicio: (element: T) => boolean): boolean {
    return array.some(condicio);
}

// Retorna una còpia ordenada d'un array numèric.
export function ordenarNumeros(numeros: number[]): number[] {
    return [...numeros].sort((a, b) => a - b);
}

// Retorna una còpia ordenada d'un array de textos.
export function ordenarTextos(textos: string[]): string[] {
    return [...textos].sort((a, b) => a.localeCompare(b));
}

let numeros: number[] = [8, 3, 10, 5, 2];

// map: transforma tots els elements.
let dobles: number[] = numeros.map((n) => n * 2);

// filter: retorna els elements seleccionats.
let grans: number[] = numeros.filter((n) => n >= 5);

// forEach: recorre els elements.
numeros.forEach((n) => console.log(n));

// find: retorna un element o undefined.
let primer: number | undefined = numeros.find((n) => n > 5);

// some: retorna true o false.
let existeixDeu: boolean = numeros.some((n) => n === 10);

// every: comprova si tots compleixen una condició.
let totsPositius: boolean = numeros.every((n) => n > 0);

// sort: ordena l'array original.
numeros.sort((a, b) => a - b);

// slice: extreu un fragment sense modificar l'original.
let fragment: number[] = numeros.slice(1, 3);

// splice: elimina o insereix elements modificant l'original.
numeros.splice(1, 1);

// concat: uneix arrays.
let units: number[] = numeros.concat([20, 30]);