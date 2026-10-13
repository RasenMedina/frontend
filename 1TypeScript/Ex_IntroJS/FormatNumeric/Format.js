"use strict";

/**
 * Calcular el preu final (PVP) aplicant %dte i %iva al preu base.
 *
 * @param {string} preu     Preu de l'article.
 * @param {string} dte      Percentatge de descompte en aquest article.
 * @param {string} iva      Percentatge de l'IVA en aquest article.
 *
 * @return {string}         Preu de venda de l'article amb dos decimals i format de moneda local ("12,50 €").
 */
function pvp(preu, dte, iva) {
    // 1. Convertim els inputs de text a números decimals (parseFloat)
    let p = parseFloat(preu);
    let d = parseFloat(dte);
    let i = parseFloat(iva);

    // Si algun dels camps essencials (preu) no és un nombre vàlid, sortim retornant undefined
    if (isNaN(p)) return undefined;

    // Si el descompte o l'iva estan buits o no són vàlids, assumim 0% per defecte
    if (isNaN(d)) d = 0;
    if (isNaN(i)) i = 0;

    // 2. Calculem primer el descompte
    // Fórmula: preu - (preu * descompte / 100)
    let preuAmbDescompte = p - (p * (d / 100));

    // 3. Calculem l'IVA sobre el resultat anterior
    // Fórmula: preuAmbDescompte + (preuAmbDescompte * iva / 100)
    let preuFinal = preuAmbDescompte + (preuAmbDescompte * (i / 100));

    // 4. Formatem el nombre a format local espanyol/català amb exactament 2 decimals i afegim el símbol de moneda " €"
    // El mètode toLocaleString("ca-ES", { ... }) ens garanteix la coma decimal i els punts de milers si calgués.
    return preuFinal.toLocaleString("ca-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " €";
}



/**
 * Calculadora amb les quatre funcions bàsiques: suma, resta, multiplicació i divisió.
 *
 * @param {string} n1       Primer número. String amb un valor numèric enter o decimal.
 * @param {string} n2       Segon número. String amb un valor numèric enter o decimal.
 * @param {string} operacio Operació a realitzar ("+", "-", "*" o "/")
 *
 * @return {string}         Resultat de l'operació amb el format local (utilitzant la coma per separar els decimals).
 */
function miniCalc(n1, n2, operacio) {
    // 1. Convertim els inputs de text a números decimals
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);

    // Validem que tots dos nombres siguin vàlids
    if (isNaN(num1) || isNaN(num2)) return undefined;

    let resultat = 0;

    // 2. Realitzem l'operació matemàtica segons el símbol rebut per paràmetre
    switch (operacio) {
        case "+":
            resultat = num1 + num2;
            break;
        case "-":
            resultat = num1 - num2;
            break;
        case "*":
            resultat = num1 * num2;
            break;
        case "/":
            // Petita validació de seguretat per evitar divisió entre zero
            if (num2 === 0) {
                return "Error: Divisió per 0";
            }
            resultat = num1 / num2;
            break;
        default:
            return undefined;
    }

    // 3. Transformem el resultat numèric a text canviant el punt decimal per la coma (requisit de l'enunciat)
    // Utilitzem .toString().replace(".", ",") o toLocaleString sense fixar decimals per mantenir 
    // el màxim de precisió necessària tal com demanava l'exemple de la resta (2.1 - 3.9 -> "-1,7999999999999998")
    return resultat.toString().replace(".", ",");
}