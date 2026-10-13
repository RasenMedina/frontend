"use strict";

/******************************************************
* EN AQUEST APARTAT PODEU AFEGIR O MODIFICAR FUNCIONS *
******************************************************/

/**
 * Retorna l'hora i data i, en alguns casos, un missatge.
 *
 * @param {Date} ara	Data i hora actual en un objecte de tipus Date
 *
 * @return {string}		Text HTML amb la següent informació:
 * 						HH:MM:SS {AM|PM}<br>
 * 						Dia de la setmana<br>
 * 						[D]D / [M]M / AAAA
 * 		A més, també ha de proporcionar les següents informacions, afegint <br> al davant:
 * 			Si és migdia (12:00 PM): Són les 12 del migdia. Tens una hora per anar a dinar.
 * 			Si és mitjanit (00:00 AM):
 * 				Si és Cap d'any (1 de gener): Bon any !!!
 * 				Si és Nadal (25 de desembre): Bon Nadal !!!
 * 				Si no és cap dels anteriors: És mitjanit. No hauries d'estar dormint?
 * 			Si és any de traspàs (bisiesto):
 * 				A les 08:00 AM de l'1 de gener: Bon dia. Aquest serà un any especial.
 * 				A les 08:00 AM del 29 de febrer: Bon dia. Avui és un dia especial.
 */
function rellotge(ara:Date) : string {

	return "";
}

/************************************************
* FINAL DE L'APARTAT ON PODEU FER MODIFICACIONS *
************************************************/

function clock() {
	document.getElementById('data')!.innerHTML = rellotge(new Date());
}

function init() {
	clock();
	setInterval(clock, 1000);
}
