"use strict";

/**
 * Eliminar els accents i les dièresis de totes les vocals.
 * S'han de respectar les majúscules i minúscules.
 * La resta de caràcters han de quedar igual.
 * Exemple:
 *	f   =  "ÁÀÂÄ, ÉÈÊË, ÍÌÎÏ, ÓÒÔÖ, ÚÙÛÜ. áàâä, éèêë, íìîï, óòôö, úùûü, ÇçÑñ."
 *	return "AAAA, EEEE, IIII, OOOO, UUUU. aaaa, eeee, iiii, oooo, uuuu, ÇçÑñ."
 *
 * @param f	Frase que s'ha de processar.
 *
 * @return  Frase processada.
 */
function transliterar(f:string) : string {

	return "";
}



/**
 * S'ha de dividir la frase en trossos.
 * Els trossos venen delimitats per una subcadena que no pot estar buida.
 * El resultat ha d'indicar el número de trossos i cada troç separat de l'anterior per un salt de línia.
 * Exemple:
 *	f   =  "Allí, tieta Mercè, faci cafè, crema, te i til·la."
 *	sep =  ", " (coma i espai)
 *	return "5 trossos:\nAllí\ntieta Mercè\nfaci cafè\ncrema\nte i til·la."
 *
 * @param {string} f	Frase que s'ha de processar.
 * @param {string} sep	Substring que fa de separador.
 *
 * @return {string}		Missatge i frase processada o nul si 'sep' està buit.
 */
function separar(f:string, sep:string) : string {

	return "";
}
