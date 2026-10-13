// Mostra un número amb un decimal.
export function unDecimal(numero: number): string {
    return numero.toFixed(1);
}

// Mostra un número amb dos decimals.
export function dosDecimals(numero: number): string {
    return numero.toFixed(2);
}

// Arrodoneix un número a un decimal i retorna un number.
export function arrodonirUnDecimal(numero: number): number {
    return Math.round(numero * 10) / 10;
}

// Arrodoneix un número a dos decimals i retorna un number.
export function arrodonirDosDecimals(numero: number): number {
    return Math.round(numero * 100) / 100;
}

// Mostra un número amb format català.
export function formatCatala(numero: number): string {
    return numero.toLocaleString("ca-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Mostra un import en euros.
export function formatEuros(numero: number): string {
    return numero.toLocaleString("ca-ES", {
        style: "currency",
        currency: "EUR"
    });
}

// Mostra un percentatge a partir d'un valor entre 0 i 1.
export function formatPercentatge(numero: number): string {
    return numero.toLocaleString("ca-ES", {
        style: "percent",
        maximumFractionDigits: 1
    });
}

// Genera un enter aleatori entre mínim i màxim, inclosos.
export function randomEnter(minim: number, maxim: number): number {
    return Math.floor(Math.random() * (maxim - minim + 1)) + minim;
}

// Genera un decimal aleatori entre mínim i màxim.
export function randomDecimal(minim: number, maxim: number): number {
    return Math.random() * (maxim - minim) + minim;
}

// Dona format de data catalana.
export function formatData(data: Date): string {
    return data.toLocaleDateString("ca-ES");
}